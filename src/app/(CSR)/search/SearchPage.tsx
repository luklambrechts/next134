"use client";

import { UnsplashImage } from "@/models/unsplash_image";
import { FormEvent, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";

export default function SearchPage() {
    const [searchResults, setSearchResults] = useState<UnsplashImage[] | null>(null);
    const [searchResultsloading, setSearchResultsLoading] = useState(false);
    const [searchResultsLoadingIsError, setSearchResultsLoadingIsError] = useState(false);
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const query = formData.get("query")?.toString().trim();
        if (query) {
            try {
                setSearchResults(null);
                setSearchResultsLoading(false);
                setSearchResultsLoading(true);
                const response = await fetch(`/api/search?query=${query}`);
                const images: UnsplashImage[] = await response.json();
                setSearchResults(images);
            } catch (error) {
                    console.error(error);
                    setSearchResultsLoadingIsError(true);
            } finally {
                setSearchResultsLoading(false);
            }
           
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
        <div className="d-flex flex-column align-items-center">
            {searchResultsloading && <Spinner animation="border" />}
            {searchResultsLoadingIsError && <div>Something went wrong. Please try again.</div>}
            {searchResults?.length === 0 && <p>Nothing found. Try a different query!</p>}
        </div>
        
    </div>
}