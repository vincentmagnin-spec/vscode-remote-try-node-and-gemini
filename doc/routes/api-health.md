# GET /api/health

Checks the health status of the API.

## Request

### Query Parameters

None.

## Responses

### 200 OK

Indicates that the service is healthy.

**Body:**

```json
{
  "status": "ok",
  "message": "API is healthy"
}
```
