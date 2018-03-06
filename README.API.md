## Classes

<dl>
<dt><a href="#Performance">Performance</a></dt>
<dd></dd>
<dt><a href="#Performance">Performance</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#startServer">startServer()</a></dt>
<dd><p>Starts a mock server for Unit Tests that cover code sections
that include calls to a server. This must be called before
you can successfully use <code>sendResponse</code>.</p>
</dd>
<dt><a href="#stopServer">stopServer()</a></dt>
<dd><p>Stops a mock server started with <code>startServer</code></p>
</dd>
<dt><a href="#sendResponse">sendResponse(response, [index])</a> ⇒ <code>*</code></dt>
<dd></dd>
</dl>

<a name="Performance"></a>

## Performance
**Kind**: global class  

* [Performance](#Performance)
    * [new Performance([nowable])](#new_Performance_new)
    * [new Performance(func, [iterations])](#new_Performance_new)

<a name="new_Performance_new"></a>

### new Performance([nowable])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [nowable] | [<code>Performance</code>](#Performance) \| <code>DateConstructor</code> | <code>DateConstructor</code> | Any object having method `now` that returns a time of type number. |

<a name="new_Performance_new"></a>

### new Performance(func, [iterations])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| func | <code>function</code> |  | A function whose body defines the performance test case. |
| [iterations] | <code>number</code> | <code>10000</code> | The number of times to run func. |

<a name="Performance"></a>

## Performance
**Kind**: global class  

* [Performance](#Performance)
    * [new Performance([nowable])](#new_Performance_new)
    * [new Performance(func, [iterations])](#new_Performance_new)

<a name="new_Performance_new"></a>

### new Performance([nowable])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [nowable] | [<code>Performance</code>](#Performance) \| <code>DateConstructor</code> | <code>DateConstructor</code> | Any object having method `now` that returns a time of type number. |

<a name="new_Performance_new"></a>

### new Performance(func, [iterations])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| func | <code>function</code> |  | A function whose body defines the performance test case. |
| [iterations] | <code>number</code> | <code>10000</code> | The number of times to run func. |

<a name="startServer"></a>

## startServer()
Starts a mock server for Unit Tests that cover code sections
that include calls to a server. This must be called before
you can successfully use `sendResponse`.

**Kind**: global function  
<a name="stopServer"></a>

## stopServer()
Stops a mock server started with `startServer`

**Kind**: global function  
<a name="sendResponse"></a>

## sendResponse(response, [index]) ⇒ <code>\*</code>
**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| response | <code>Object</code> |  | A response object |
| response.status | <code>number</code> |  | An HTTP status code. |
| response.response | <code>Object</code> |  | A mock response payload. |
| [index] | <code>number</code> | <code>0</code> | The index of the response that you want to send. This is useful for those instances where your codebase makes multiple service calls and you need to send responses back to some or all of them. |

