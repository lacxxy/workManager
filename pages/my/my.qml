<view class="my">
    <view class="head">
        <view class="mes">
            <text>{{mes.name}}</text>
            <text class="smaller">{{mes.major}}</text>
            <text class="smaller">{{mes.major}}{{mes.place}}班</text>
        </view>

        <view class="avatar">
            <open-data type="userAvatarUrl"></open-data>
        </view>
    </view>

    <view class="menu">
        <list-item qq:for="{{menu}}" arr="{{item}}"></list-item>
    </view>
</view>
