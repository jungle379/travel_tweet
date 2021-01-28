# README

Travel＿Tweet

＊このアプリは写真を投稿できるツイートアプリを元に、メニューバーをハンバーガーメニューで実装し、
SNSに必須機能となっている、いいね！ボタンを「詳細」ページで押せるように実装しています。

# Technology Used
・HTML  
・CSS  
・JavaScript  
・Ruby On Rails  

# テーブル構築
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|

### Association
- has_many :groups, through: :groups_users
- has_many: groups_users
- has_many :messages

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
 - has_many :users, through: :groups_users
 - has_many: groups_users
 - has_many :messages

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
 - belongs_to :group
 - belongs_to :user

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true| 

### Association
 - belongs_to :group
 - belongs_to :user

## likeテーブル

### Association
 - belongs_to :user

## postテーブル
|Column|Type|Options|
|------|----|-------|
|bigint|user_id||
|post|string||
