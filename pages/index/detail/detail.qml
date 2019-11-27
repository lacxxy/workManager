<view class="detail">
<view class="head">
        <text class="title">{{title}}</text><text class="time">{{time}}</text>
        <view class="content">
            <text class="item" qq:for="{{contArray}}">{{item}}</text>
        </view>
        <text class="note">备注:{{note}}</text>
    </view>

    <view class="btn-area">
        <button class="btn edt-btn" bindtap="edt">修改</button>
        <button class="btn rmv-btn" bindtap="rmv">删除</button>
        <button class="btn done-btn" bindtap="done">标记已完成</button>
    </view>
</view>