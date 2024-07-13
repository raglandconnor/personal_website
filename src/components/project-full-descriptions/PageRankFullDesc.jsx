import React from "react";

function PageRankFullDesc() {
    return (
        <div>
            <section>
                <p className="mb-4 md:mx-24">
                    This project was created as a project for COP3530, Data
                    Structures and Algorithms, during Spring 2024 at UF.
                </p>
                <p className="mb-4 md:mx-24">
                    In this project, I implemented a simplified version of the
                    Google PageRank algorithm using C++.
                </p>
                <p className="mb-4 md:mx-24">
                    PageRank is an algorithm used by Google Search to rank web
                    pages in their search engine results. It measures the
                    importance of website pages by considering the quantity and
                    quality of links to a page, thereby determining its relative
                    importance within the entire web graph.
                </p>
                <p className="mb-4 md:mx-24">
                    This algorithm takes in a graph of web pages and calculates
                    the PageRank of each page based on the number of incoming
                    links.
                </p>

                <div className="grid items-center justify-center my-8 md:mx-32 lg:mx-48">
                    <img
                        src="/project-screenshots/pagerank.png"
                        alt="Page Rank Diagram Image"
                        className="rounded-2xl"
                        draggable="false"
                    />
                </div>

                <p className="mb-4 md:mx-24">
                    A directed graph data structure is used to represent the web
                    pages and their links. Each node in the graph represents a
                    web page, and each directed edge represents a link from one
                    page to another.
                </p>
                <p className="mb-4 md:mx-24">
                    The graph is implemented using an adjacency list for
                    efficient storage and traversal of nodes and edges.
                </p>
            </section>

            <section>
                <h2 className="mt-24 mx-24 mb-8 font-semibold">Features</h2>

                <ul className="mb-4 mx-4 md:mx-28 list-disc">
                    <li className="mb-2">Inserting edges into the graph</li>
                    <li className="mb-2">
                        Computing PageRank values through a specified number of
                        power iterations
                    </li>
                    <li className="mb-2">
                        Printing the ranks of pages in alphabetical order
                    </li>
                    <li className="mb-2">Inserting edges into the graph</li>
                    <li className="mb-2">Inserting edges into the graph</li>
                </ul>

                <p className="mb-4 md:mx-24">
                    The PageRank computation involves distributing rank values
                    across linked pages iteratively until the values converge or
                    a specified number of iterations is reached.
                </p>
            </section>

            <section>
                <h2 className="mt-24 mx-24 mb-8 font-semibold">Testing</h2>

                <p className="mb-4 md:mx-24">
                    The project includes functions for testing, using the{" "}
                    <span className="font-bold">Catch2 testing framework</span>,
                    such as a method to get a string representation of the page
                    ranks and a method to parse input data to construct the
                    graph and perform PageRank calculations.
                </p>
                <p className="mb-4 md:mx-24">
                    These functions are useful for validating the correctness of
                    the algorithm using unit tests.
                </p>
            </section>

            <section className="text-center mt-24">
                <h3 className="mb-4">Access the repository here</h3>
                <a
                    href="https://github.com/raglandconnor/Project_2_PageRank"
                    target="_blank"
                    className="text-2xl font-semibold bg-blue-500 p-2 rounded-lg bg-opacity-75 hover:bg-opacity-85 hover:underline"
                >
                    GitHub
                </a>
            </section>
        </div>
    );
}

export default PageRankFullDesc;
