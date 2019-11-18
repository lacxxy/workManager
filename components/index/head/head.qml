<view class="head"
    ><view class="head-left">
        <text>{{today.time}} {{today.week}}</text>
        <text>第 {{week}} 周</text>
        <text>今日课程</text>
    </view>

    <view class="divLine"></view>

    <view class="head-right">
        <text>{{weather.city}} | {{weather.type}}</text>
        <view class="temp">
            <view class="temp-left">
                <text>{{weather.low}}</text>
                <text>{{weather.high}}</text>
            </view>
            <view class="temp-right">
                <text class="now-temp">{{weather.now}}</text>
                <text>℃</text>
            </view>
        </view>
    </view>
</view>
