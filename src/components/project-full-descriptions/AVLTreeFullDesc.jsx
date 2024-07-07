import React from "react";

function AVLTreeFullDesc() {
    return (
        <div>
            <div>
                <section>
                    <p className="mb-4 md:mx-24">
                        This project was created as a project for COP3530, Data
                        Structures and Algorithms, during Spring 2024 at UF.
                    </p>
                    <p className="mb-4 md:mx-24">
                        In this project, my goal was to create an AVL tree, a
                        self-balancing binary search tree.
                    </p>

                    <div className="grid items-center justify-center my-8 md:mx-32 lg:mx-48">
                        <img
                            src="/project-screenshots/avl.png"
                            alt="AVL Tree Diagram Image"
                            className="rounded-2xl"
                            draggable="false"
                        />
                    </div>

                    <p className="mb-4 md:mx-24">
                        The prompt was to create an AVL tree that would contain
                        ID numbers and names of students at UF.
                    </p>
                </section>

                <section>
                    <h2 className="mt-24 mx-24 mb-8 font-semibold">Features</h2>
                    <ul className="mb-4 mx-4 md:mx-28 list-disc">
                        <li className="mb-2">
                            Insert function{" "}
                            <span className="italic">O(log n)</span>
                        </li>
                        <li className="mb-2">
                            Remove function{" "}
                            <span className="italic">O(log n)</span>
                        </li>
                        <li className="mb-2">
                            Search by ID{" "}
                            <span className="italic">O(log n)</span>
                        </li>
                        <li className="mb-2">
                            Search by name <span className="italic">O(n)</span>
                        </li>
                        <li className="mb-2">
                            Print inorder, preorder, postorder{" "}
                            <span className="italic">O(n)</span>
                        </li>
                        <li className="mb-2">
                            Print level count{" "}
                            <span className="italic">O(1)</span>
                        </li>
                        <li className="mb-2">
                            Remove inorder <span className="italic">O(n)</span>
                        </li>
                    </ul>

                    <h5 className="mt-4 md:mx-24 mb-2">
                        Read the full time complexity breakdown:
                    </h5>
                    <a
                        href="https://drive.google.com/file/d/1ew37L-K3Et6pa8ALMZXYmS2R6YcNRTgf/view?usp=sharing"
                        target="_blank"
                        className="text-center mb-4 md:mx-24 text-lg bg-gray-500 p-1 px-2 rounded-lg bg-opacity-75 hover:bg-opacity-85"
                    >
                        View PDF
                    </a>
                </section>

                <section>
                    <h2 className="mt-24 mx-24 mb-8 font-semibold">Testing</h2>
                    <p className="mb-4 md:mx-24">
                        In this project, I utilized the{" "}
                        <span className="underline">
                            Catch2 testing framework
                        </span>{" "}
                        to ensure the correctness of the AVL tree
                        implementation.
                    </p>
                    <p className="mb-4 md:mx-24">
                        The tests covered a wide range of scenarios, including
                        invalid commands, edge cases, rotations, and deletion
                        cases.
                    </p>

                    <h5 className="mt-4 md:mx-24 mb-2">Tests:</h5>
                    <ul className="mb-4 mx-4 md:mx-28 list-disc">
                        <li className="mb-2">
                            <span className="font-semibold">
                                Invalid commands:
                            </span>{" "}
                            tested various invalid commands to verify that the
                            AVL tree correctly identifies and rejects them,
                            ensuring robust input validation
                        </li>
                        <li className="mb-2">
                            <span className="font-semibold">Edge cases:</span>{" "}
                            explored edge cases such as removing from an empty
                            tree and searching for non-existent elements
                        </li>
                        <li className="mb-2">
                            <span className="font-semibold">Rotations:</span>{" "}
                            performed tests to confirm the correctness of left,
                            right, left-right, and right-left rotations,
                            ensuring the tree remains balanced after each
                            insertion
                        </li>
                        <li className="mb-2">
                            <span className="font-semibold">
                                Deletion cases:
                            </span>{" "}
                            tested deletion scenarios involving nodes with no
                            children, one child, and two children, including
                            special cases where the successor has children, to
                            ensure proper node removal and tree rebalancing
                        </li>
                        <li className="mb-2">
                            <span className="font-semibold">
                                Height updating:
                            </span>{" "}
                            verified that the height of the tree updates
                            correctly after various operations, maintaining the
                            AVL property
                        </li>
                    </ul>
                </section>

                <section className="text-center mt-24">
                    <h3 className="mb-4">Access the repository here</h3>
                    <a
                        href="https://github.com/raglandconnor/Gator_AVL_Project"
                        target="_blank"
                        className="text-2xl font-semibold bg-blue-500 p-2 rounded-lg bg-opacity-75 hover:bg-opacity-85 hover:underline"
                    >
                        GitHub
                    </a>
                </section>
            </div>
        </div>
    );
}

export default AVLTreeFullDesc;
