<view class="edit">
    <view class="head">
        <textarea class="content" bindinput ="contentInput" value="{{content}}"></textarea>
    </view>
    <text class="hint">(以上内容不准确？点击可手动编辑)</text>

    <picker value="{{index}}" bindchange="bindCourseChange" range="{{array}}">
        <view class="picker">
            <text class="title">课程</text>
            <text>{{array[index]}}</text>
        </view>
    </picker>
    <picker mode="date" value="{{date}}" bindchange="bindDateChange">
        <view class="picker">
            <text class="title">截止时间</text>
            <text>{{date}}</text>
        </view>
    </picker>
        <view class="picker">
            <text class="title">备注</text>
            <input type="text" bindinput ="noteInput" value="{{note}}" class="input"></input>
        </view>

    <button class="btn" bindtap="add">继续添加</button>
    <button class="btn" bindtap="save">保存</button>
</view>
