# imagepress

1. <a href="#baseline">baseline</a>









2. <a href="#bucket">bucket</a>




3. <a href="#credentials">credentials</a>





4. <a href="#image">image</a>



5. <a href="#repo">repo</a>







6. <a href="#sources">sources</a>

7. <a href="#source">source</a>





## baseline
### POST /v0/baseline/complete

```js
const { res, err, data } = await api.imagepress.v0.postBaselineComplete({
  noop: {
    type: Boolean
    default: false
  },
  public: {
    type: String
    required: true
  },
  private: {
    type: String
    required: true
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
  name: {
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
  name: {
    type: String
    required: true
  },
  cloudcredentialid: {
    type: String
    required: true
  },
  reposList: {
    type: String
    required: true
  },
  subnetId: {
    type: String
    required: true
  },
  imageId: {
    type: String
    required: true
  },
  region: {
    type: String
    required: true
  },
  assignIp: {
    type: Boolean
    default: true
  },
  platform: {
    type: String
  },
  deviceName: {
    type: String
    default: /dev/xvda
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
  tags: {
    type: Array
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
  public: {
    type: String
    required: true
  },
  private: {
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
  sourceRegion: {
    type: String
    required: true
  },
  regions: {
    type: Array
    default: 
  },
  sourceImage: {
    type: String
    required: true
  },
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

### GET /v0/baseline/distribute/status

```js
const { res, err, data } = await api.imagepress.v0.getBaselineDistributeStatus({
  imageId: {
    type: String
    required: true
  },
  region: {
    type: String
    required: true
  },
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

### DELETE /v0/baseline/delete/copy

```js
const { res, err, data } = await api.imagepress.v0.deleteBaselineDeleteCopy({
  public: {
    type: String
    required: true
  },
  private: {
    type: String
    required: true
  },
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
  public: {
    type: String
    required: true
  },
  private: {
    type: String
    required: true
  },
  copies: {
    type: Array
    required: true
  },
})
```

### DELETE /v0/baseline/delete

```js
const { res, err, data } = await api.imagepress.v0.deleteBaselineDelete({
  public: {
    type: String
    required: true
  },
  private: {
    type: String
    required: true
  },
  id: {
    type: String
    required: true
  },
})
```

## bucket
### GET /v0/bucket/list

```js
const { res, err, data } = await api.imagepress.v0.getBucketList({
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

### GET /v0/bucket/objects

```js
const { res, err, data } = await api.imagepress.v0.getBucketObjects({
  bucket: {
    type: String
    required: true
  },
  region: {
    type: String
    required: true
  },
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

### GET /v0/bucket/region

```js
const { res, err, data } = await api.imagepress.v0.getBucketRegion({
  bucket: {
    type: String
    required: true
  },
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

### GET /v0/bucket/regions

```js
const { res, err, data } = await api.imagepress.v0.getBucketRegions({
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
})
```

### POST /v0/credentials/git

```js
const { res, err, data } = await api.imagepress.v0.postCredentialsGit({
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

## image
### POST /v0/image/attrs

```js
const { res, err, data } = await api.imagepress.v0.postImageAttrs({
  imageId: {
    type: String
    required: true
  },
  makePublic: {
    type: Boolean
  },
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

### POST /v0/image/tagger

```js
const { res, err, data } = await api.imagepress.v0.postImageTagger({
  imageId: {
    type: String
    required: true
  },
  tags: {
    type: Array
    required: true
  },
  region: {
    type: String
    required: true
  },
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
  repoUrl: {
    type: String
    required: true
  },
  isTarball: {
    type: Boolean
    default: false
  },
  public: {
    type: String
    required: true
  },
  private: {
    type: String
    required: true
  },
  region: {
    type: String
    required: true
    match: /ap-south-1|eu-west-3|eu-west-2|eu-west-1|ap-northeast-2|ap-northeast-1|sa-east-1|ca-central-1|ap-southeast-1|ap-southeast-2|eu-central-1|us-east-1|us-east-2|us-west-1|us-west-2/
  },
  repoBranch: {
    type: String
    default: HEAD
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
  public: {
    type: String
    required: true
  },
  private: {
    type: String
    required: true
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
  repoBranch: {
    type: String
    default: HEAD
  },
})
```

### POST /v0/repo/worker

```js
const { res, err, data } = await api.imagepress.v0.postRepoWorker()
```

### GET /v0/repo/list

```js
const { res, err, data } = await api.imagepress.v0.getRepoList({
})
```

### GET /v0/repo

```js
const { res, err, data } = await api.imagepress.v0.getRepo({
  public: {
    type: String
    required: true
  },
  private: {
    type: String
    required: true
  },
  url: {
    type: String
  },
  name: {
    type: String
  },
  fileList: {
    type: Array
  },
  assignIp: {
    type: Boolean
  },
  subnetId: {
    type: String
    required: true
  },
  branch: {
    type: String
  },
  status: {
    type: String
  },
  credentialid: {
    type: String
    required: true
  },
  noWorker: {
    type: Boolean
    default: false
  },
})
```

### POST /v0/repo

```js
const { res, err, data } = await api.imagepress.v0.postRepo({
  public: {
    type: String
    required: true
  },
  private: {
    type: String
    required: true
  },
  url: {
    type: String
    required: true
  },
  name: {
    type: String
    required: true
  },
  fileList: {
    type: Array
    required: true
  },
  assignIp: {
    type: Boolean
  },
  subnetId: {
    type: String
    required: true
  },
  branch: {
    type: String
  },
  status: {
    type: String
    required: true
  },
  credentialid: {
    type: String
    required: true
  },
  noWorker: {
    type: Boolean
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

### POST /v0/source

```js
const { res, err, data } = await api.imagepress.v0.postSource({
  name: {
    type: String
    required: true
  },
  public: {
    type: String
    required: true
  },
  private: {
    type: String
    required: true
  },
  region: {
    type: String
  },
  imageId: {
    type: String
    required: true
  },
  tags: {
    type: Array
  },
  accounts: {
    type: Array
  },
  type: {
    type: String
    required: true
    match: /s3|ami/
  },
  description: {
    type: String
  },
  provider: {
    type: String
  },
  makePublic: {
    type: Boolean
  },
})
```

### DELETE /v0/source

```js
const { res, err, data } = await api.imagepress.v0.deleteSource({
  id: {
    type: String
    required: true
    resolve: value => value.length <= 128
  },
})
```

### PUT /v0/source

```js
const { res, err, data } = await api.imagepress.v0.putSource()
```

### POST /v0/source/status

```js
const { res, err, data } = await api.imagepress.v0.postSourceStatus()
```
