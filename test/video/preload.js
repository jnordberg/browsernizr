/*!
{
  "name": "Video Preload Attribute",
  "property": "videopreload",
  "tags": ["video", "media"]
}
!*/

  Modernizr.addTest('videopreload', 'preload' in createElement('video'));
