# PicWipe — Smart & Fun Media Cleanup

PicWipe is a free, open-source media management app by **SadSha** that helps you declutter your photo and video library effortlessly. Instead of aimlessly scrolling through your gallery, PicWipe lets you **scroll with purpose** — cleaning up with intuitive swipe gestures.

## Features

- **Swipe-Based Sorting**
  - **Swipe Left → Trash**: moves media to a staging area for review before deletion.
  - **Swipe Right → Keep**: retains media in the gallery.
- **Free & Open Source**
  - No locked features, no subscriptions, no ads.
  - Privacy focussed — your photos never leave your device.

## Build from Source

### Prerequisites

- Node.js 20+
- JDK 17+
- Android SDK & build tools (compileSdk 35, minSdk 24)

PicWipe is written in React Native and Expo and built for Android.

```
git clone https://github.com/molvimundar-star/PicWipe.git
cd PicWipe
npm install --legacy-peer-deps
cd android && ./gradlew assembleDebug
```

A debug APK is also built automatically by GitHub Actions on every push to the `sadsha-remix` branch (see `.github/workflows/build-debug-apk.yml`).

### Release build (Play Store)

The release AAB is built by `.github/workflows/build-release-aab.yml` (manual trigger). It needs the release keystore, which is **not** in this repo — provide it as GitHub Actions secrets (`ANDROID_KEYSTORE_BASE64`, `KEYSTORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD`).

## Credits & License

PicWipe is based on **sWipe** by madhavpcm (https://github.com/madhavpcm/sWipe), rebranded for SadSha with a new name, icon, colours and Android package (`com.sadsha.picwipe`). The core swipe-to-sort behaviour is unchanged.

PicWipe is licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)** — see `LICENSE`. The source code of this app is available in this public repository, as the AGPL requires.
