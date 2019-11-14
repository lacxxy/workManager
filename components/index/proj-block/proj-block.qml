<view class="proj-block" style="width:{{(dataArray.toTime-dataArray.fromTime)>1?80:37}}vw;background:{{color}}">
    <view class="left">
        <text>{{dataArray.fromTime}}</text>
        <text>{{dataArray.toTime}}</text>
    </view>
    <view class="right">
        <text>{{dataArray.name}}</text>
        <text>{{dataArray.place}}</text>
    </view>
</view>