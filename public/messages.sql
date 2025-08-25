--
-- PostgreSQL database dump
--

-- Dumped from database version 16.9
-- Dumped by pg_dump version 16.9

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: messages; Type: TABLE; Schema: public; Owner: shinji
--

CREATE TABLE public.messages (
    id integer NOT NULL,
    text character varying(100),
    sender character varying(20),
    added timestamp without time zone
);


ALTER TABLE public.messages OWNER TO shinji;

--
-- Name: messages_id_seq; Type: SEQUENCE; Schema: public; Owner: shinji
--

ALTER TABLE public.messages ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.messages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: messages; Type: TABLE DATA; Schema: public; Owner: shinji
--

COPY public.messages (id, text, sender, added) FROM stdin;
1	Hi Buddy	No-one	2025-07-28 02:15:23.812
2	No Buddy	One	2025-07-28 02:19:21.594
3	star	lost	2025-07-28 11:20:45.046
\.


--
-- Name: messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: shinji
--

SELECT pg_catalog.setval('public.messages_id_seq', 3, true);


--
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: public; Owner: shinji
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

