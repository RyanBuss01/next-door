const express = require('express') 
const actions = require('../methods/actions')
const upload = require('../middleware/multer')
const router = express.Router()

router.post('/uploadImage', upload.single('myFile'), actions.uploadMedia)
router.post('/signup', actions.signup)
router.post('/signin', actions.signin)
router.get('/getUserdata', actions.getUserData)
router.post('/updateUserData',  actions.updateUserData)
router.post('/reportPost', actions.reportPost)
router.post('/addFriend', actions.addFriend)
router.get('/getFriendsList', actions.getFriendsList)
router.delete('/removeFriend', actions.removeFriend)
router.get('/getFriendRequestList', actions.getFriendRequestList)
router.get('/search', actions.search)
router.get('/userSearch', actions.userSearch)
router.post('/updateUserLocation', actions.updateUserLocation)
router.post('/blockUser', actions.blockUser)
router.get('/getBlockedUsers', actions.getBlockedUsers)
router.delete('/unblockUser', actions.unblockUser)
router.post('/uploadPost', actions.uploadPost)
router.get('/getUserPosts', actions.getUserPosts)
router.post('/uploadLiveReply', actions.uploadLiveReply)
router.post('/uploadPostCaption', actions.uploadPostCaption)
router.get('/getOverlayPosts', actions.getOverlayPosts)
router.get('/mapQuery', actions.mapQuery)


module.exports = router;