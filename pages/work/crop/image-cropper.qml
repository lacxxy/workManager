<view class="crop">
<image-cropper
  id="image-cropper"
  limit_move="true"
  disable_rotate="true"
  width="{{width}}"
  height="{{height}}"
  max_width="{{max_width}}"
  min_scale="0.1"
  max_scale="7"
  min_height="50"
  max_height="{{max_height}}"

  imgSrc="{{src}}"

  bindload="cropperload"
  bindimageload="loadimage"
></image-cropper>
<button class="submit" bindtap="submit">确认</button>
</view>