# Backend Development Tasks: FastAPI + SQLite + API Design

**Technology Stack:** FastAPI, Python 3.10+, SQLAlchemy, SQLite  
**Priority:** HIGH - Critical Path  
**Estimated Time:** 6-8 days  
**Scope:** Limited to Mục 7 (Interactive Game) only

## 🏗️ Project Setup & Foundation

### **B-01: FastAPI Project Initialization**
**Priority:** HIGH | **Time:** 2 hours | **Dependencies:** None
- [ ] Create FastAPI project structure
- [ ] Set up virtual environment and dependencies
- [ ] Configure SQLAlchemy with SQLite database
- [ ] Set up CORS middleware for frontend domain
- [ ] Create requirements.txt and README

**Acceptance Criteria:**
- FastAPI server runs on `http://localhost:8000`
- Auto-generated API docs available at `/docs`
- Database connection established

### **B-02: Database Schema Design**
**Priority:** HIGH | **Time:** 3 hours | **Dependencies:** B-01
- [ ] Design database models:
  ```python
  # GameSession model
  - id: str (session_id)
  - created_at: datetime
  - is_active: bool
  
  # Vote model  
  - id: str (vote_id)
  - session_id: str (foreign key)
  - choice: str (A, B, C)
  - timestamp: datetime
  - user_identifier: str (optional)
  ```
- [ ] Create migration scripts
- [ ] Set up database initialization
- [ ] Add data validation constraints

## 🎮 Game API Endpoints

### **B-03: Game Session Management**
**Priority:** HIGH | **Time:** 4 hours | **Dependencies:** B-02
- [ ] `POST /api/v1/game/sessions`
  - Create new voting session
  - Return session_id
  ```json
  {
    "session_id": "group1_20251023",
    "created_at": "2025-10-23T10:00:00Z",
    "expires_at": "2025-10-23T12:00:00Z"
  }
  ```
- [ ] `GET /api/v1/game/sessions/{session_id}`
  - Retrieve session info
  - Check if session is active

**Acceptance Criteria:**
- Session ID generated correctly
- Time-based expiration implemented
- Error handling for invalid sessions

### **B-04: Vote Submission**
**Priority:** HIGH | **Time:** 3 hours | **Dependencies:** B-03
- [ ] `POST /api/v1/game/vote`
  - Accept vote submission
  - Validate input data
  ```json
  {
    "session_id": "group1_20251023",
    "choice": "A",
    "user_identifier": "student123_optional"
  }
  ```
- [ ] Input validation:
  - Required: session_id, choice
  - Choice validation (A, B, C only)
  - Session existence check
- [ ] Duplicate vote prevention (optional)

**Acceptance Criteria:**
- Vote saved to database
- Validation errors handled properly
- Response time < 500ms

### **B-05: Results Retrieval**
**Priority:** HIGH | **Time:** 3 hours | **Dependencies:** B-04
- [ ] `GET /api/v1/game/results/{session_id}`
  - Return aggregated results
  ```json
  {
    "session_id": "group1_20251023",
    "total_votes": 45,
    "results": {
      "A": 15,
      "B": 22, 
      "C": 8
    },
    "percentages": {
      "A": 33.3,
      "B": 48.9,
      "C": 17.8
    },
    "last_updated": "2025-10-23T10:15:00Z"
  }
  ```
- [ ] Real-time results calculation
- [ ] Zero-vote handling

**Acceptance Criteria:**
- Correct vote counts
- Percentage calculations accurate
- Response optimized for polling

## 🔧 Advanced Features

### **B-06: Real-time Updates (Optional)**
**Priority:** LOW | **Time:** 6 hours | **Dependencies:** B-05
- [ ] WebSocket implementation for real-time updates
- [ ] Room-based broadcasting
- [ ] Connection management
- [ ] Error handling and reconnection

### **B-07: Analytics & Logging**
**Priority:** LOW | **Time:** 3 hours | **Dependencies:** B-05
- [ ] Request logging
- [ ] Performance metrics
- [ ] Error tracking
- [ ] Usage analytics

## 🛡️ Security & Validation

### **B-08: Input Sanitization**
**Priority:** MEDIUM | **Time:** 2 hours | **Dependencies:** B-05
- [ ] SQL injection prevention
- [ ] Input validation middleware
- [ ] Rate limiting implementation
- [ ] CORS policies enforcement

### **B-09: Error Handling**
**Priority:** MEDIUM | **Time:** 2 hours | **Dependencies:** B-05
- [ ] Standardized error responses
- [ ] HTTP status code usage
- [ ] Logging for debugging
- [ ] User-friendly error messages

## 📦 Database Management

### **B-10: Database Maintenance**
**Priority:** LOW | **Time:** 2 hours | **Dependencies:** B-02
- [ ] Data cleanup automation
- [ ] Backup strategy
- [ ] Performance optimization
- [ ] Migration scripts

## 🚀 Deployment Preparation

### **B-11: Production Configuration**
**Priority:** MEDIUM | **Time:** 3 hours | **Dependencies:** B-09
- [ ] Environment variable configuration
- [ ] Production database setup
- [ ] Security hardening
- [ ] Performance tuning

### **B-12: API Documentation**
**Priority:** LOW | **Time:** 2 hours | **Dependencies:** B-11
- [ ] OpenAPI schema completion
- [ ] Response examples
- [ ] Error code documentation
- [ ] Usage examples

## 🧪 Testing

### **B-13: Unit Tests**
**Priority:** MEDIUM | **Time:** 4 hours | **Dependencies:** B-05
- [ ] Model tests
- [ ] API endpoint tests
- [ ] Database operation tests
- [ ] Validation tests

### **B-14: Integration Tests**
**Priority:** MEDIUM | **Time:** 3 hours | **Dependencies:** B-13
- [ ] End-to-end API flows
- [ ] Database integration
- [ ] Error scenario testing
- [ ] Performance testing

---

## 📊 API Summary

| Method | Endpoint | Purpose | Priority |
|---|---|---|---|
| POST | `/api/v1/game/sessions` | Create voting session | HIGH |
| GET | `/api/v1/game/sessions/{id}` | Get session info | HIGH |
| POST | `/api/v1/game/vote` | Submit vote | HIGH |
| GET | `/api/v1/game/results/{id}` | Get results | HIGH |

**Total Estimated Time:** 6-8 days  
**Frontend Integration:** Ready for F-09 (Game Section)
**Deployment Target:** Render.com or similar

---

**Next Steps:** Review UI/UX animation tasks for frontend-backend integration.
