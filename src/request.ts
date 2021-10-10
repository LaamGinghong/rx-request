import type { RequestConfig } from './types'
import type { Observable } from 'rxjs'
import type { AjaxConfig, AjaxResponse } from 'rxjs/ajax'
import { isString } from 'lodash-es'
import { ajax } from 'rxjs/ajax'

function request<T>(url: string): Observable<AjaxResponse<T>>
function request<T>(config: RequestConfig): Observable<AjaxResponse<T>>
function request<T>(
  value: string | RequestConfig,
): Observable<AjaxResponse<T>> {
  const config = getAjaxConfig(value)
  return ajax(config)
}

function getAjaxConfig(value: string | RequestConfig): AjaxConfig {
  if (isString(value)) {
    return { url: value, method: 'GET' }
  }
  const {
    url,
    method,
    body,
    timeout,
    headers,
    crossDomain,
    withCredentials,
    responseType,
    query: queryParams,
  } = value
  return {
    url,
    method,
    body,
    timeout,
    headers,
    crossDomain,
    withCredentials,
    responseType,
    queryParams,
  }
}

export default request
