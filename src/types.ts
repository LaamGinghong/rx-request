type HttpRequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface RequestConfig {
  /** The address of the target server is requested */
  url: string
  /**
   * The method of the request
   * @default "GET"
   */
  method?: HttpRequestMethod
  /**
   * Parameters passed to the back end and Stored in HTTP's body.
   *
   * Usually used for methods exclude **"GET"** requests.
   *
   * If the "content-type" is **"application/json"**, the body will be serialized as **JSON**.
   *
   * If the "content-type" is "application/x-www-form-urlencoded", whatever object passed to the body will be serialized as URL.
   *
   * In other cases, the body will be passed directly.
   */
  body?: any
  /**
   * The time to wait before causing the underlying XMLHttpRequest.
   *
   * Defaults to **0**, which is idiomatic for **"never timeout"**.
   */
  timeout?: number
  /**
   * The HTTP headers to apply.
   *
   * Note that, by default, RxJS will add the following headers under certain conditions:
   *
   * 1. If the `"content-type"` header is **NOT** set, and the `body` is [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData),
   *    a `"content-type"` of `"application/x-www-form-urlencoded; charset=UTF-8"` will be set automatically.
   * 2. If the `"x-requested-with"` header is **NOT** set, and the `crossDomain` configuration property is **NOT** explicitly set to `true`,
   *    (meaning it is not a CORS request), a `"x-requested-with"` header with a value of `"XMLHttpRequest"` will be set automatically.
   *    This header is generally meaningless, and is set by libraries and frameworks using `XMLHttpRequest` to make HTTP requests.
   */
  headers?: Readonly<Record<string, any>>
  /**
   * Whether or not to send the HTTP request as a CORS request.
   * @default false
   */
  crossDomain?: boolean
  /**
   * To send user credentials in a CORS request, set to `true`. To exclude user credentials from
   * a CORS request, _OR_ when cookies are to be ignored by the CORS response, set to `false`.
   */
  withCredentials?: boolean
  /**
   * Can be set to change the response type.
   *
   * Valid values are `"arraybuffer"`, `"blob"`, `"document"`, `"json"`, and `"text"`.
   *
   * Note that the type of `"document"` (such as an XML document) is ignored if the global context is not "Window".
   * @default "json"
   */
  responseType?: XMLHttpRequestResponseType
  /**
   * Query string parameters to add to the URL in the request.
   *
   * Accepts either a query string, a `URLSearchParams` object, a dictionary of key/value pairs.
   */
  query?:
    | string
    | URLSearchParams
    | Record<
        string,
        string | number | boolean | string[] | number[] | boolean[]
      >
}
