import RNUxcam from 'react-native-ux-cam';

RNUxcam.optIntoSchematicRecordings(); // Add this line to enable iOS screen recordings
RNUxcam.setAutomaticScreenNameTagging(false)
const configuration = {
  userAppKey: 'YOUR API KEY',
  /*
      disable advanced gestures if you're having issues with
      swipe gestures and touches during app interaction
  */
  // enableAdvancedGestureRecognition: false
}
RNUxcam.startWithConfiguration(configuration);
