# anydoor

Tiny NodeJS Static Web server

## 安装

```
npm i -g anydoor
```

## 使用方法

```
anydoor # 把当前文件夹作为静态资源服务器根目录

anydoor -p 8080 # 设置端口号为 8080

anydoor -h localhost # 设置 host 为 localhost

anydoor -d /usr # 设置根目录为 /usr
```

.gitignore
匹配模式前 / 代表项目根目录
匹配模式最后加 / 代表是目录
匹配模式前加 ！ 代表取反
* 代表任意个字符
？ 匹配任意一个字符
** 匹配多级目录

ESLint
