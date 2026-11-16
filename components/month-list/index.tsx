import { View, Text, FlatList, Image, ImageSourcePropType } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import images from '@/constants/images';
import {
    MediaListDataType,
    SwipeScreenKeyType,
} from '@/common/types/SwipeMediaTypes';
import LocalStorageStore from '@/common/lib/localstorage/LocalStorageStore';
import { useFocusEffect } from 'expo-router';
import { isMonthKey } from '@/util/StringUtil';

const MonthList = () => {
    const [monthListData, setMonthListData] = useState<MediaListDataType[]>([]);

    // want use effect to be triggered when refresh state changes changes (static LocalStorageStore.getRefreshState())

    useFocusEffect(
        useCallback(() => {
            const fetchData = async () => {
                // from async storage get all keys
                const localStorageKeys = await LocalStorageStore.getAllKeys();
                console.debug('localStorageKeys:', localStorageKeys);
                const data: MediaListDataType[] = (
                    await Promise.all(
                        localStorageKeys.map(async (key) => {
                            // load action trie for key
                            const metadata =
                                await LocalStorageStore.getMetadataOnly(
                                    key,
                                    isMonthKey(key) // TODO: deprecate this, this is wrong way to get type
                                        ? SwipeScreenKeyType.MONTH
                                        : SwipeScreenKeyType.ALBUM
                                );
                            if (!metadata) {
                                console.error(
                                    'No metadata found for key:',
                                    key
                                );
                                throw Error(
                                    `No metadata found for key: ${key}`
                                );
                            }

                            if (
                                !metadata.getIsActive() &&
                                metadata.getProgress() === 0
                            ) {
                                return null;
                            }

                            // convert bytes to mb
                            const totalSize =
                                metadata.getDeletedMediaSize() / (1024 * 1024);
                            return {
                                name: key,
                                type: SwipeScreenKeyType.MONTH,
                                progress: metadata.getProgress(),
                                dateObj: new Date(metadata.getLastAccessed()), // for sorting
                                itemCount: metadata.getDeletedCount(), // assuming count exists in MediaData
                                totalSize,
                                thumbnail: images.newYork,
                            };
                        })
                    )
                ).filter((item) => item !== null);

                setMonthListData(data);
            };

            fetchData();
            console.debug('time line use focus effect called');
        }, [])
    );

    const renderItem = ({ item }: { item: MediaListDataType }) => {
        const isInProgress = item.progress < 1;

        return (
            <View
                className={`p-4 m-2 rounded-2xl shadow-md flex-row items-center ${
                    isInProgress
                        ? 'bg-amber-600'
                        : 'bg-white border border-amber-300'
                }`}
            >
                {/* Thumbnail Image */}
                {/* <Image
                    // source={item.thumbnail}
                    className="w-14 h-14 rounded-lg mr-4"
                /> */}

                {/* Text Info */}
                <View className="flex-1">
                    <Text
                        className={`text-lg font-semibold ${isInProgress ? 'text-white' : 'text-amber-600'}`}
                    >
                        {item.name}
                    </Text>
                    <Text
                        className={`text-sm ${isInProgress ? 'text-amber-200' : 'text-amber-400'}`}
                    >
                        {item.itemCount} items cleaned
                    </Text>
                    <Text
                        className={`text-xs ${isInProgress ? 'text-amber-100' : 'text-amber-600'}`}
                    >
                        {item.totalSize.toFixed(2)} MB freed
                    </Text>
                </View>

                {/* In Progress Badge (Only shows if true) */}
                {isInProgress && (
                    <Text className="px-3 py-1 text-xs font-bold text-amber-600 bg-white rounded-full">
                        In Progress
                    </Text>
                )}
            </View>
        );
    };
    return (
        <View>
            <FlatList
                data={monthListData}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={{ paddingBottom: 20 }}
                ListEmptyComponent={
                    <Text className="text-center text-gray-400 mt-6 ">
                        Nothing here, Click a pic or two!
                    </Text>
                }
            />
        </View>
    );
};

export default MonthList;
