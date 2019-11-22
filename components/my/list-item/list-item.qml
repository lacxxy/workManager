<view class="list-item" bindtap="routergo" qq:if="{{arr.url!='share'}}">
    <text>{{arr.title}}</text>
    <text>></text>
</view>
<button open-type="share" class="list-item" bindtap="routergo" qq:else>
    <text>{{arr.title}}</text>
    <text>></text>
</button>