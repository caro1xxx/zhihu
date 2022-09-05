#### 知否 · ![](https://camo.githubusercontent.com/475b49b04214dfa67c1ec8a2837888ae63003feb7b71fd45be30ff360148ad87/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f72656163742e7376673f7374796c653d666c6174) ![](https://camo.githubusercontent.com/1698104e976c681143eb0841f9675c6f802bb7aa832afc0c7a4e719b1f3cf955/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d417061636865253230322e302d626c75652e737667) ![](https://camo.githubusercontent.com/beb57734b0d3f2576a5d6a59be19772d1dbd0e0a8385fba0fe6af4255eb8fe39/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f6379626572636865662e737667)

React version `18.2.0`

> 仅完成主页的内容以及展开全文阅读,二级导航栏已实现,但无内容

#### 指令

> npm install

> npm start

> npm run build

#### 接口

> 接口使用的是fastmock的

```json
//主页推荐内容接口格式
{
  "data":[
      {
        "title":"为什么我不建议自己在网上直接报考ACP/ACE认证？为什么我不建议自己在网上直接报考ACP",
        "content":"因为贵且累,我们以阿里云官方云计算ACP学习报考且1200是一次考试的费用，如果考试没有通过，补考还需再重新缴费1200为例，来算给大家一笔账.这个费用是固定的费用，全网统一收费，除去官网在极少数时间做活动以外，有少量优惠，其他时间费用都不变。且1200是一次考试的费用，如果考试没有通过，补考还需再重新缴费1200",
        "picture":"https://pic1.zhimg.com/80/v2-d79b537c47f28aab6bfada49316c3162_1440w.jpg?source=1940ef5c",
        "media":"null",
        "endorsement":399
      },
      {
        "title":"为什么我不建议自己在网上直接报考ACP/ACE认证？",
        "content":"因为贵且累,我们以阿里云官方云计算ACP学习报考为例，来算给大家一笔账.这个费用是固定的费用，全网统一收费，除去官网在极少数时间做活动以外，有少量优惠，其他时间费用都不变。且1200是一次考试的费用，如果考试没有通过，补考还需再重新缴费1200",
        "picture":"null",
        "media":"",
        "endorsement":139
      },
    ......
}

//推荐作者接口格式
{
  "data":[
    {
      "name":"Navis Li",
      "description":"数码领域博主",
      "avatar":"https://pic1.zhimg.com/v2-399e39d93b173a6b779476b32ac1d082_l.jpg?source=5a24d060"
    },
    {
      "name":"太郎",
      "description":"程序员领域博主",
      "avatar":"https://pic1.zhimg.com/eaa1578ccae23958fa6eb25ea3e6f0b9_l.jpg?source=5a24d060"
    },
		.....
  ]
}
```

#### 效果图

![](https://raw.githubusercontent.com/caro1xxx/zhihu/c24e426173e5662be4dbd125c6da85bb012e03e9/src/assets/img/%E6%95%88%E6%9E%9C%E5%9B%BE.png)

#### Licencing

> zhifou is released under the [Apache 2.0 Licence](https://www.apache.org/licenses/LICENSE-2.0) and is covered by [Crown Copyright](https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/).
