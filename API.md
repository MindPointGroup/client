# imagepress

1. <a href="#baseline">baseline</a>

2. <a href="#credentials">credentials</a>

3. <a href="#repo">repo</a>

4. <a href="#sources">sources</a>

5. <a href="#source">source</a>

6. <a href="#image">image</a>

7. <a href="#organization">organization</a>

8. <a href="#api_key">api_key</a>

9. <a href="#api_keys">api_keys</a>

10. <a href="#api_key">api_key</a>

11. <a href="#users">users</a>

12. <a href="#user">user</a>

13. <a href="#invite">invite</a>

14. <a href="#invites">invites</a>

15. <a href="#invite">invite</a>

16. <a href="#private">private</a>

## baseline
### POST /v0/baseline/complete

```js
const { res, err, data } = await api.imagepress.v0.postBaselineComplete({
  noop: {
    type: Boolean
    default: false
  },
  status: {
    type: String
    required: true
  },
  instanceId: {
    type: String
    required: true
  },
  region: {
    type: String
    required: true
  },
  id: {
    type: String
    required: true
  },
})
```

### POST /v0/baseline/launch

```js
const { res, err, data } = await api.imagepress.v0.postBaselineLaunch({
  id: {
    type: String
    required: false
    match: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  },
  name: {
    type: String
    required: false
  },
  cloudcredentialid: {
    type: String
    required: true
    match: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  },
  reposList: {
    type: Array
    default: 
  },
  subnetId: {
    type: String
    required: true
  },
  sourceid: {
    type: String
    required: false
    match: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  },
  regions: {
    type: Array
    required: true
  },
  assignIp: {
    type: Boolean
    default: true
  },
  permissions: {
    type: Object
    required: false
    default: [object Object]
  },
  deviceName: {
    type: String
    default: /dev/xvda
  },
  tags: {
    type: Array
    default: 
  },
  runWorker: {
    type: Boolean
    default: true
  },
  instanceType: {
    type: String
    default: t2.medium
  },
  volumeSize: {
    type: Number
    default: 50
  },
  volumeType: {
    type: String
    default: gp2
  },
})
```

### GET /v0/baseline/list

```js
const { res, err, data } = await api.imagepress.v0.getBaselineList({
})
```

### GET /v0/baseline/bake/status

```js
const { res, err, data } = await api.imagepress.v0.getBaselineBakeStatus({
  imageId: {
    type: String
    required: true
  },
  region: {
    type: String
    required: true
  },
  id: {
    type: String
    required: true
  },
  noop: {
    type: Boolean
    required: false
  },
  instanceId: {
    type: String
    required: false
  },
})
```

### POST /v0/baseline/distribute

```js
const { res, err, data } = await api.imagepress.v0.postBaselineDistribute({
  id: {
    type: String
    required: true
  },
})
```

### GET /v0/baseline/distribute/status

```js
const { res, err, data } = await api.imagepress.v0.getBaselineDistributeStatus({
  imageIds: {
    type: Array
    required: true
  },
  regions: {
    type: Array
    required: true
  },
  count: {
    type: Number
    required: false
  },
  id: {
    type: String
    required: true
  },
})
```

### DELETE /v0/baseline/delete/copy

```js
const { res, err, data } = await api.imagepress.v0.deleteBaselineDeleteCopy({
  region: {
    type: String
    required: true
  },
  imageId: {
    type: String
    required: true
  },
})
```

### DELETE /v0/baseline/delete/copies

```js
const { res, err, data } = await api.imagepress.v0.deleteBaselineDeleteCopies({
  copies: {
    type: Array
    required: true
  },
})
```

### DELETE /v0/baseline/delete

```js
const { res, err, data } = await api.imagepress.v0.deleteBaselineDelete({
  id: {
    type: String
    required: true
  },
})
```

## credentials
### DELETE /v0/credentials

```js
const { res, err, data } = await api.imagepress.v0.deleteCredentials({
  id: {
    type: String
    required: true
  },
})
```

### GET /v0/credentials

```js
const { res, err, data } = await api.imagepress.v0.getCredentials({
})
```

### POST /v0/credentials/aws

```js
const { res, err, data } = await api.imagepress.v0.postCredentialsAws({
  id: {
    type: String
    required: false
  },
  type: {
    type: String
    match: /aws|git/
  },
  name: {
    type: String
    required: true
  },
  eid: {
    type: String
    required: true
  },
  arn: {
    type: String
    required: true
  },
  trust-policy: {
    type: String
    required: true
  },
  access-policy: {
    type: String
    required: true
  },
})
```

### POST /v0/credentials/git

```js
const { res, err, data } = await api.imagepress.v0.postCredentialsGit({
  id: {
    type: String
    required: false
  },
  type: {
    type: String
    match: /aws|git/
  },
  name: {
    type: String
    required: true
  },
  username: {
    type: String
    required: false
  },
  password: {
    type: String
    required: false
  },
})
```

### POST /v0/credentials/git_key

```js
const { res, err, data } = await api.imagepress.v0.postCredentialsGit_key({
  id: {
    type: String
    required: false
  },
  type: {
    type: String
    match: /aws|git/
  },
  name: {
    type: String
    required: true
  },
  key: {
    type: String
    required: true
  },
})
```

### POST /v0/credentials/verify

```js
const { res, err, data } = await api.imagepress.v0.postCredentialsVerify({
  public: {
    type: String
    required: true
  },
  private: {
    type: String
    required: true
  },
})
```

## repo
### GET /v0/repo/download

```js
const { res, err, data } = await api.imagepress.v0.getRepoDownload({
  isTarball: {
    type: Boolean
    default: false
  },
  id: {
    type: String
    required: true
  },
})
```

### POST /v0/repo/upload

```js
const { res, err, data } = await api.imagepress.v0.postRepoUpload({
  repoUrl: {
    type: String
    required: true
  },
  id: {
    type: String
    required: true
    match: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  },
  region: {
    type: String
    required: true
    match: /ap-south-1|eu-west-3|eu-west-2|eu-west-1|ap-northeast-2|ap-northeast-1|sa-east-1|ca-central-1|ap-southeast-1|ap-southeast-2|eu-central-1|us-east-1|us-east-2|us-west-1|us-west-2/
  },
  tarArchive: {
    type: String
    required: true
  },
  zipArchive: {
    type: String
    required: true
  },
  branch: {
    type: String
    required: true
  },
})
```

### GET /v0/repo/list

```js
const { res, err, data } = await api.imagepress.v0.getRepoList({
})
```

### GET /v0/repo

```js
const { res, err, data } = await api.imagepress.v0.getRepo({
  id: {
    type: String
    required: false
  },
  status: {
    type: String
    required: false
  },
  sync: {
    type: Boolean
    default: false
  },
  name: {
    type: String
    required: false
  },
  url: {
    type: String
    required: false
  },
  cloudcredentialid: {
    type: String
    required: false
  },
  region: {
    type: String
    required: false
  },
  subnetId: {
    type: String
    required: false
  },
  assignIp: {
    type: Boolean
    default: false
  },
  gitcredentialid: {
    type: String
    required: false
  },
  token: {
    type: String
    required: false
  },
  fileList: {
    type: Array
    required: false
    default: 
  },
  branch: {
    type: String
    required: false
  },
})
```

### POST /v0/repo

```js
const { res, err, data } = await api.imagepress.v0.postRepo({
  id: {
    type: String
    required: false
  },
  status: {
    type: String
    required: false
  },
  sync: {
    type: Boolean
    default: false
  },
  name: {
    type: String
    required: false
  },
  url: {
    type: String
    required: false
  },
  cloudcredentialid: {
    type: String
    required: false
  },
  region: {
    type: String
    required: false
  },
  subnetId: {
    type: String
    required: false
  },
  assignIp: {
    type: Boolean
    default: false
  },
  gitcredentialid: {
    type: String
    required: false
  },
  token: {
    type: String
    required: false
  },
  fileList: {
    type: Array
    required: false
    default: 
  },
  branch: {
    type: String
    required: false
  },
})
```

### DELETE /v0/repo

```js
const { res, err, data } = await api.imagepress.v0.deleteRepo({
  id: {
    type: String
    required: true
  },
})
```

## sources
### GET /v0/sources

```js
const { res, err, data } = await api.imagepress.v0.getSources({
})
```

## source
### GET /v0/source

```js
const { res, err, data } = await api.imagepress.v0.getSource({
  id: {
    type: String
    required: true
  },
})
```

### DELETE /v0/source

```js
const { res, err, data } = await api.imagepress.v0.deleteSource({
  id: {
    type: String
    required: true
    match: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  },
})
```

### PUT /v0/source

```js
const { res, err, data } = await api.imagepress.v0.putSource({
  id: {
    type: String
    required: true
  },
  name: {
    type: String
    required: false
  },
  description: {
    type: String
    required: false
  },
})
```

### POST /v0/source

```js
const { res, err, data } = await api.imagepress.v0.postSource({
  name: {
    type: String
    required: true
  },
  cloudcredentialid: {
    type: String
    required: true
    match: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  },
  imageId: {
    type: String
    required: true
  },
  provider: {
    type: String
    default: aws
    match: /^aws$/
  },
  region: {
    type: String
    default: us-east-1
  },
})
```

## image
### GET /v0/image/verify

```js
const { res, err, data } = await api.imagepress.v0.getImageVerify({
  imageId: {
    type: String
    required: true
  },
  region: {
    type: String
    required: true
  },
  id: {
    type: String
    required: true
    match: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  },
})
```

## organization
### POST /v0/organization

```js
const { res, err, data } = await api.imagepress.v0.postOrganization({
  resetUser: {
    type: Boolean
    required: false
  },
  id: {
    type: String
    required: false
  },
  label: {
    type: String
    required: true
  },
})
```

### GET /v0/organization

```js
const { res, err, data } = await api.imagepress.v0.getOrganization({
  id: {
    type: String
    required: true
  },
})
```

### DELETE /v0/organization

```js
const { res, err, data } = await api.imagepress.v0.deleteOrganization({
})
```

### PUT /v0/organization

```js
const { res, err, data } = await api.imagepress.v0.putOrganization({
  resetUser: {
    type: Boolean
    required: false
  },
  id: {
    type: String
    required: true
  },
  label: {
    type: String
    required: false
  },
})
```

### POST /v0/organization/leave

```js
const { res, err, data } = await api.imagepress.v0.postOrganizationLeave({
})
```

## api_key
### POST /v0/api_key/create

```js
const { res, err, data } = await api.imagepress.v0.postApi_keyCreate({
  label: {
    type: String
    required: true
  },
})
```

### DELETE /v0/api_key/delete

```js
const { res, err, data } = await api.imagepress.v0.deleteApi_keyDelete({
  id: {
    type: String
    required: true
  },
})
```

## api_keys
### GET /v0/api_keys

```js
const { res, err, data } = await api.imagepress.v0.getApi_keys({
})
```

## api_key
### GET /v0/api_key

```js
const { res, err, data } = await api.imagepress.v0.getApi_key({
  id: {
    type: String
    required: true
  },
})
```

## users
### GET /v0/users

```js
const { res, err, data } = await api.imagepress.v0.getUsers({
})
```

## user
### POST /v0/user/role

```js
const { res, err, data } = await api.imagepress.v0.postUserRole({
  id: {
    type: String
    required: true
  },
  roleid: {
    type: Number
    required: true
  },
})
```

## invite
### POST /v0/invite

```js
const { res, err, data } = await api.imagepress.v0.postInvite({
  email: {
    type: String
    required: true
  },
})
```

### POST /v0/invite/accept

```js
const { res, err, data } = await api.imagepress.v0.postInviteAccept({
  id: {
    type: String
    required: true
  },
})
```

## invites
### GET /v0/invites

```js
const { res, err, data } = await api.imagepress.v0.getInvites({
  mine: {
    type: Boolean
    default: false
  },
})
```

## invite
### DELETE /v0/invite

```js
const { res, err, data } = await api.imagepress.v0.deleteInvite({
  id: {
    type: String
    required: true
  },
})
```

### GET /v0/invite

```js
const { res, err, data } = await api.imagepress.v0.getInvite({
  id: {
    type: String
    required: true
  },
})
```

### DELETE /v0/invite/decline

```js
const { res, err, data } = await api.imagepress.v0.deleteInviteDecline({
  inviteid: {
    type: String
    required: true
  },
})
```

## private
### POST /v0/private/email/log

```js
const { res, err, data } = await api.imagepress.v0.postPrivateEmailLog({
})
```
