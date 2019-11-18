<view class="login">
    <image src="/assets/login-background.png" class="head" mode="widthFix"></image>
    <view>
        <input value="{{account}}" class="input-area" placeholder="教务处账号" bindinput ="userNameInput"//>
        <input type="password" value="{{pwd}}" class="input-area" placeholder="教务处密码" bindinput ="pwdInput"//>
        <button class="btn input-area" bindtap="login">登录</button>
    </view>
</view>
