<h1>Transcoder 🎥 </h1>
<h2>
Generate Video Resolutions (360p, 480p, 720p, 1080p)
</h2>

This project allows you to transcode a given MP4 video into multiple resolutions. Let's get started!
Prerequisites

Before proceeding, ensure you have FFmpeg installed on your system. Check your FFmpeg version with the following command:

    ffmpeg -version

  output

    ffmpeg version 4.2.7-0ubuntu0.1 Copyright (c) 2000-2022 the FFmpeg developers
    built with gcc 9 (Ubuntu 9.4.0-1ubuntu1~20.04.1)
    ....truncated....
    
In case it’s not available, we can install it from the local package manager:
    
    $ sudo apt install ffmpeg


<h2>
Project Setup
</h2>

<h3>
Steps to Follow
</h3>

<ol>
  <li>    
    Clone this repository to your local machine.
  </li>
  <li>inside the Project Run `npm install` command </li>
  <li>
Replace the existing input.mp4 file in the project with your own MP4 video.</li>
  <li>Run the Transcoder
Execute the following command to start the transcoding process:</li>
</ol>



bash

    npm start

Output

The script will generate MP4 files in the following resolutions:

    360p
    480p
    720p
    1080p

The quality of the output videos will depend on the quality of your input video. 🎉
Enjoy! 👍

Feel free to reach out if you have any questions or suggestions!
