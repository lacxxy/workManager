<camera
  device-position="back"
  flash="off"
  binderror="error"
  style="width: 100%; height: 300px;"
></camera>
<button bindtap="takePhoto" class='btn'>拍照</button>
<view>预览</view>
<image mode="widthFix" src="{{src}}"></image>