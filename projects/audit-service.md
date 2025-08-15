---
title: Audit Service (Spring Boot + Kafka)
---

# Audit Service (Spring Boot + Kafka)

**Problem:** Track every change to Campaign/AdGroup/Keyword entities with complete history and rollback ability.

**Highlights**
- Kafka change events with linked transaction IDs across entities
- History tables with `_o`/`_n` old/new columns
- GoldenGate processes to sync to secondary topics

**Stack:** Spring Boot, Kafka, PostgreSQL

**Sample Schema Snippet**
```sql
create table campaign_history(
  event_id bigint primary key,
  event_type text not null,
  event_time timestamptz not null,
  id_o bigint, id_n bigint,
  text_o text, text_n text
);
```
