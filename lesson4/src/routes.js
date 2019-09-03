import {PageContent} from './components/PageContent'
import {MainContainer} from './components/MainContainer'
import {CommentsContainer} from './components/CommentsContainer'
import {UserContainer} from './components/UserContainer'
import CommentContainer from 'containers/CommentContainer'

import MessagesContainer from 'containers/MessagesContainer'

export default [
    {path: '/', exact: true, component: MainContainer},
    {path: '/blog', exact: true, component: PageContent},
    {path: '/comments', exact: true, component: CommentsContainer},
    {path: '/messages', exact: true, component: MessagesContainer},
    {path: '/users', exact: true, component:UserContainer},
    {path: '/blog/:id', exact: true, component: CommentContainer}
]