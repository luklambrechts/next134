"use client";

import { FormEvent } from "react";
import { Button, Form } from "react-bootstrap";

export default function SearchPage() {
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const query = formData.get("query")?.toString().trim();
        if (query) {
            alert(query);
        }
    }
    return <div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="searh-input">
                <Form.Label>Search query</Form.Label>
                <Form.Control
                 name="query"
                 placeholder="E.g. cats, hotdogs, ..." />
            </Form.Group>
            <Button type="submit" className="mb-3">Search</Button>
        </Form>
    </div>
}