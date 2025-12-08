---
title: SuppportIQ - Support Chatbot For Websites
date: 2025-12-07T06:49:00.000+01:00
summary: An intelligent, autonomous customer support platform powered by
  Google's Gemini LLM. SupportIQ automatically crawls and indexes company
  documentation to provide accurate, context-aware answers to user queries in
  real-time.
category: Fullstack Web Development
images:
  - /uploads/screenshot-2025-12-07-064849.png
github: https://github.com/xheenkhalil/supportiq
visit: https://supportiq-ten.vercel.app/
---



SupportIQ
Stack: Next.js, Google Gemini API, Supabase, Firecrawl
Description: A full-stack RAG (Retrieval-Augmented Generation) application designed for automated customer success.

* Data Pipeline: Utilized Firecrawl to scrape and turn web documentation into clean markdown.
* Vector Search: Implemented Supabase for storing vector embeddings, allowing the AI to semantic search through company data for precise context.
* Generative AI: Integrated the Gemini API to synthesize natural, human-like responses based on the retrieved context.
* Frontend: Built a responsive chat interface with Next.js, featuring real-time streaming responses and a custom backend
