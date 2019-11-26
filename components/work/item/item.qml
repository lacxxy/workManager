<view class="item" bindtap="routergo"> 
    <text class="proj">{{work.theme}} | {{work.endTime}}</text>
    <view class="list-item">
        <view class="point" qq:if="{{content[0]}}"></view>
        <text class="title">{{content[0]}}</text>
    </view>
    <view class="list-item" qq:if="{{content[1]}}">
        <view class="point"></view>
        <text class="title">{{content[1]}}</text>
    </view>
</view>