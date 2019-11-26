<view class="my">
    <view class="head">
        <view class="mes">
            <text>{{mes.name}}</text>
            <text class="smaller">{{mes.colleage}}</text>
            <text class="smaller">{{mes.grade}}级{{mes.major}}{{mes.place}}班</text>
        </view>

        <view class="avatar">
            <open-data type="userAvatarUrl"></open-data>
        </view>
    </view>

    <view class="menu">
        <list-item qq:for="{{menu}}" arr="{{item}}"></list-item>
    </view>
</view>
