import { createAction } from 'redux-actions'

export const loadStarted = createAction ('[Comments] loading started');
export const loadCompleted = createAction ('[Comments] loading completed');
export const loadFailed = createAction ('[Comments] loading failed');

export const load = () => (dispatch, getState) => {
    //this.setState ({ loading: true })//1 loadingStarted

    const state = getState();

    dispatch (loadStarted ());

        fetch (`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${state.comments.page}`)
          .then ((response) => response.json ())
          .then ((comments) => {
            // this.setState ({
            //   loading: false,
            //   comments: this.state.comments.concat (comments)//2 loadingCompleted
            // })
            dispatch (loadCompleted (comments))
          })
         // .catch (() => { this.setState ({ loading: false }) })//3 loadingFailed
         .catch (() => { dispatch (loadFailed ()) })

}
