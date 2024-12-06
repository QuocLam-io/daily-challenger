"use client";
import React, { useState } from "react";
//Styling
import "./FilledLanding.scss";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
//Components
import Overlay from "../modals/Overlay";
import { PublicChallengeTypes } from "@/path/to/LandingClient";
import { PublicChallengerForm } from "@/Components/public-landing/EmptyLanding";
import Link from "next/link";

interface FilledLandingProps {
  publicChallenge: PublicChallengeTypes;
  setPublicChallenge: React.Dispatch<
    React.SetStateAction<PublicChallengeTypes | null>
  >;
}

const FilledLanding: React.FC<FilledLandingProps> = ({
  publicChallenge,
  setPublicChallenge,
}) => {
  const [challengeActionMenuToggle, setChallengeActionMenuToggle] =
    useState(false);
  // console.log(challengeActionMenuToggle, "challengeActionMenuToggle");
  const [deletePCModalOpen, setDeletePCModalOpen] = useState(false);
  const [editPCModalOpen, setEditPCModalOpen] = useState(false);

  const deletePublicChallenge = () => {
    localStorage.removeItem("publicChallenge");
    setPublicChallenge(null);
  };

  // console.log(publicChallenge.expiresAt, "publicChallenge");
  const temporaryTimeLeftDisplay =
    publicChallenge.expiresAt && !publicChallenge.expired
      ? `${publicChallenge.expiresAt.hours}:${String(
          publicChallenge.expiresAt.minutes
        ).padStart(2, "0")}:${String(
          publicChallenge.expiresAt.seconds
        ).padStart(2, "0")}`
      : "Expired";

  return (
    <div className="public-filled-container">
      <div className="public-filled-hero">
        <Image
          src="/images/bw-lamp.png"
          alt="old timey lamp"
          width={80}
          height={80}
        />
        <div className="public-filled-hero-text">
          <h2>I challenge myself to...</h2>
          <p>{publicChallenge.challenge}</p>
        </div>
      </div>
      <div className="public-filled-timer">
        <p>Challenge ends in:</p>
        {/* TODO: Add expired logic in LandingClient component after design handoff */}
        <p>{temporaryTimeLeftDisplay}</p>
      </div>
      <div className="public-filled-footer">
        <button>
          <Image
            src="/images/bw-circle-checkmark.png"
            alt="Check mark icon"
            width={24}
            height={24}
          />
          <p>Mark as done</p>
        </button>
        <div
          className="public-challenge-action-menu-wrapper"
          aria-haspopup="menu"
          aria-expanded={challengeActionMenuToggle}
        >
          <button
            className={challengeActionMenuToggle ? "bg-active-grey" : ""}
            onClick={() =>
              setChallengeActionMenuToggle(!challengeActionMenuToggle)
            }
          >
            <Image
              src="/images/vertical-ellipsis.png"
              alt="Vertical ellipsis icon"
              width={24}
              height={24}
            />
          </button>
          <div
            className="public-challenge-action-menu"
            role="menu"
            aria-label="Action menu"
          >
            <ul>
              <li
                onClick={() => {
                  setEditPCModalOpen(true);
                }}
                role="menuitem"
              >
                <Image
                  src="/images/grey-pencil.png"
                  alt="Pencil icon"
                  width={16}
                  height={16}
                />
                <p>Edit</p>
              </li>
              <li
                onClick={() => {
                  setDeletePCModalOpen(true);
                }}
                role="menuitem"
              >
                <Image
                  src="/images/grey-trashcan.png"
                  alt="Trashcan icon"
                  width={16}
                  height={16}
                />
                <p>Delete</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="public-challenge-action-btns">
          <button
            onClick={() => {
              setEditPCModalOpen(true);
            }}
          >
            <Image
              src="/images/grey-pencil.png"
              alt="Pencil icon"
              width={16}
              height={16}
            />
            <p>Edit</p>
          </button>
          <button
            onClick={() => {
              setDeletePCModalOpen(true);
            }}
          >
            <Image
              src="/images/grey-trashcan.png"
              alt="Trashcan icon"
              width={16}
              height={16}
            />
            <p>Delete</p>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {editPCModalOpen && (
          <Overlay customClassName={`flex-align-start portrait-align-center`}>
            {/* <EditPublicChallengerModal
              onClose={() => {
                setEditPCModalOpen(false);
              }}
            /> */}
            <PublicChallengerForm
              onClose={() => {
                setEditPCModalOpen(false);
              }}
            />
          </Overlay>
        )}
        {deletePCModalOpen && (
          <Overlay>
            <DeletePublicChallengerModal
              onClose={() => setDeletePCModalOpen(false)}
              deletePublicChallenge={deletePublicChallenge}
            />
          </Overlay>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilledLanding;

/* --------------------- Delete Public Challenger Modal --------------------- */

interface DeletePublicChallengerModalProps {
  onClose: () => void;
  deletePublicChallenge: () => void;
}

const DeletePublicChallengerModal: React.FC<
  DeletePublicChallengerModalProps
> = ({ onClose, deletePublicChallenge }) => {
  return (
    <div className="delete-pc-modal">
      <h1>Delete this challenge?</h1>
      <div className="delete-pc-modal-body">
        <p>
          Deleting this challenge will allow you to create a new challenge. As a
          guest user you can only have <span>1 active challenge</span> at a
          time.
        </p>
        <br />
        <p>
          To create multiple challenges, please{" "}
          <Link
            // TODO: switch out after pro features are implemented
            href={`/under-construction`}
          >
            sign in or create an account
          </Link>
        </p>
      </div>
      <div className="delete-pc-modal-footer">
        {/* TODO: make design system for this type of footer with 2 btns */}
        <button onClick={onClose}>Cancel</button>
        <button onClick={deletePublicChallenge}>Yes, Delete</button>
      </div>
    </div>
  );
};
