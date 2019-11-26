<view class="proj-block" style="width:{{((dataArray.toTime-dataArray.fromTime)>1||dataArray.fromTime==9)?80:38}}vw;background:{{color}}">
    <view class="left">
        <text>{{dataArray.fromTime}}</text>
        <text>{{dataArray.toTime}}</text>
    </view>
    <view class="right">
        <text class="text">{{dataArray.name}}</text>
        <text class="text">{{dataArray.place}}</text>
    </view>
</view>