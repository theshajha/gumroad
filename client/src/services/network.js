import axios from 'axios'
import networkInterceptor from './interceptor'
import { baseUrl } from '../constants/Network'

const baseURL = baseUrl.api
const REQUEST_TIMEOUT = 20000

let instance = null

/**
 * @function getInstance
 * @description return axois instance
 */
const getInstance = async () => {
    if (!instance) {
        instance = await createInstance()
        networkInterceptor.register(instance)
    }
    return instance
}

/**
 * @function createInstance
 * @description create axios instance only once
 * ## We can create multiple such function to have a totally different instance of an axios (with different base url and config)
 */
const createInstance = async () => {
    instance = axios.create({
        timeout: REQUEST_TIMEOUT,
    })

    return instance
}

/**
 * Use this to get a token to cancel an API call in mid.
 */
const getCancelToken = () => {
    const source = axios.CancelToken.source()
    return source
}

/**
 * @function applyCancelPromise
 * @param {CallableFunction} callback
 * @description Return new Promise with cancellation mechanism
 */
const applyCancelPromise = (callback) => {
    const cancelToken = getCancelToken()
    let isRequestComplete = false

    const requestCancelPromise = new Promise((resolve, reject) => {
        callback(cancelToken.token)
            .then(resolve)
            .catch(reject)
            .finally(() => {
                isRequestComplete = true
            })
    })

    /**
     * @function abort
     * @description cancel the current request
     */
    const abort = () => {
        if (isRequestComplete) return
        cancelToken.cancel()
    }

    requestCancelPromise.abort = abort
    return requestCancelPromise
}

/**
 * @param {string} url
 * @param {*} body
 * @param {*} headers
 * @param {*} ConfigOptions
 * These config options can be passed to the api options
 * - errMsg: Error message to be shown in case of error
 * - hasFormData: to convert api data into form data
 * - fullResponse: to get the actual axios api response (only data object in the apu response is returned)
 * - hideDefaultError: to hide the default error message (use in case of custom conditional error message)
 * - onProgressCallback: to get the progress of the upload (in put and post requests)
 */
const get = (url, params = {}, headers = {}, options = {}) => {
    return applyCancelPromise((token) => {
        const urlParams = new URLSearchParams(params).toString()
        let newUrl = url
        if (urlParams) {
            newUrl = `${url}?${decodeURIComponent(urlParams)}`
        }
        return instance.get(newUrl, {
            headers,
            options,
            cancelToken: token,
        })
    })
}

/**
 * @param {string} url
 * @param {*} body
 * @param {*} headers
 * @param {*} ConfigOptions
 * These config options can be passed to the api options
 * - errMsg: Error message to be shown in case of error
 * - hasFormData: to convert api data into form data
 * - fullResponse: to get the actual axios api response (only data object in the apu response is returned)
 * - hideDefaultError: to hide the default error message (use in case of custom conditional error message)
 * - onProgressCallback: to get the progress of the upload (in put and post requests)
 */
const post = (url, body, headers = {}, options = {}) => {
    return applyCancelPromise((token) => {
        return instance.post(url, body, {
            headers,
            options,
            cancelToken: token,
            ...(options.onProgressCallback &&
                typeof options.onProgressCallback === 'function' && {
                    onUploadProgress: (progressEvent) =>
                        options.onProgressCallback(
                            Math.round(
                                (progressEvent.loaded * 100) /
                                    progressEvent.total
                            )
                        ),
                }),
        })
    })
}

/**
 * @param {string} url
 * @param {*} body
 * @param {*} headers
 * @param {*} ConfigOptions
 * These config options can be passed to the api options
 * - errMsg: Error message to be shown in case of error
 * - hasFormData: to convert api data into form data
 * - fullResponse: to get the actual axios api response (only data object in the apu response is returned)
 * - hideDefaultError: to hide the default error message (use in case of custom conditional error message)
 * - onProgressCallback: to get the progress of the upload (in put and post requests)
 */
const put = (url, body, headers = {}, options = {}) => {
    return applyCancelPromise((token) => {
        return instance.put(url, body, {
            headers,
            options,
            cancelToken: token,
            ...(options.onProgressCallback &&
                typeof options.onProgressCallback === 'function' && {
                    onUploadProgress: (progressEvent) =>
                        options.onProgressCallback(
                            Math.round(
                                (progressEvent.loaded * 100) /
                                    progressEvent.total
                            )
                        ),
                }),
        })
    })
}

const deleteCall = (url, body, headers, options = {}) => {
    return applyCancelPromise((token) => {
        return instance.delete(url, {
            data: body,
            headers,
            options,
            cancelToken: token,
        })
    })
}

const patch = (url, body, headers, options = {}) => {
    return applyCancelPromise((token) => {
        return instance.patch(url, body, {
            headers,
            options,
            cancelToken: token,
        })
    })
}

getInstance()

export { get, post, put, patch, deleteCall }
