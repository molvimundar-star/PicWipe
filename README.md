# PicWipe – Smart & Fun Media Cleanup

PicWipe is a media management app that helps you declutter your photo and video library effortlessly. Instead of aimlessly scrolling through social media, PicWipe lets you **scroll with purpose** — cleaning up your gallery with intuitive swipe gestures.

## Features

- [x] **Swipe-Based Sorting**
  - **Swipe Left → Trash**: Moves media to a staging area for review before deletion.
  - **Swipe Right → Keep**: Retains media in the gallery.

- [x] **Free & Open Source**
  - No locked features, no subscriptions
  - Privacy focussed

## Future Improvements

- [ ] **Daily Cleanup Goals**
  - Helps users declutter in small, manageable steps instead of overwhelming them.

- [ ] **Smart Insights & Stats**
  - Tracks photo-taking habits and **generates a heatmap** of media activity.
  - Provides insights into how frequently users capture photos and videos.

- [ ] Publish on F-Droid

- [ ] Add WebDAV support
  - We are eager to add WebDAV support so you can clean up media in remote web directories like NextCloud

- [ ] iOS Support

---

## Screenshots

---

### 🛠 Build from Source

#### Prerequisites

- Android Studio (latest stable version), we used an emulator from this
- JDK 17+
- Android SDK & build tools

PicWipe is written in React Native and Expo and built for Android

```
git clone https://github.com/molvimundar-star/PicWipe.git
npm install
npx eas build --platform android --profile development # Should generate APK
npx expo start # Starts development server with expo
```

---

## Attribution

PicWipe is based on [sWipe](https://github.com/madhavpcm/sWipe) by madhavpcm, licensed under the GNU Affero General Public License v3 (see `LICENSE`). PicWipe is a rebrand of that project by SadSha.
