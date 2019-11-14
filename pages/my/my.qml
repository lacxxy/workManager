<view class="my">
    <view class="head">
        <view class="mes">
            <text>彭于晏</text>
            <text class="smaller">数学与计算机科学学院</text>
            <text class="smaller">计算机6班</text>
        </view>

        <view class="avatar">
            <open-data type="userAvatarUrl"></open-data>
        </view>
    </view>

    <view class="menu">
        <list-item qq:for="{{menu}}" arr="{{item}}"></list-item>
    </view>
</view>
