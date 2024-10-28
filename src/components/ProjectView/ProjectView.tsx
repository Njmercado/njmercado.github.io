'use client'

import { Title, TitleSize } from "@/components";
import React, { useState } from "react";
import Button, { Action } from "@/components/Button/Button";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { IProjectTemplateWithLink } from "../Project/interface/ProjectTemplate.interface";

export default function ProjectView({
  title,
  description,
  images,
  techs,
  technicalDescription,
  link,
  history
}: IProjectTemplateWithLink) {

  const [showHistory, setShowHistory] = useState(false)

  return (
    <article>
      <section className="-ml-2">
        <Button
          url={'/projects'}
          type={Action.LINK}
          value={
            <article className="flex gap-2 items-center px-1">
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>Projects</span>
            </article>
          }
        />
      </section>
      <section className="mt-20">
        <Title size={TitleSize.EXTRA_LARGE} value={title.toUpperCase()}></Title>
        <p className="mt-10">
          {
            description() ?? "Description"
          }
        </p>
      </section>
      <section className="mt-10">
        <Title size={TitleSize.BIG} value="Views"></Title>
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          {images.map(({ src, alt }, index: number) =>
            <Image
              className="shadow-md shadow-slate-400 rounded-md"
              src={src}
              alt={alt}
              width={400}
              height={400}
              key={index}
            />
          )}
        </div>
      </section>
      <section className="mt-10">
        <Title size={TitleSize.BIG} value="Used techs"></Title>
        {
          techs.length > 0 ?
            <p className="flex flex-wrap gap-10 justify-around mt-10">
              {
                techs.map(
                  (tech: React.JSX.Element, index: any) =>
                    <span key={index}>{tech}</span>
                )
              }
            </p> :
            "No techs were used here :("
        }
      </section>
      {
        technicalDescription?.() &&
        <section className="mt-10">
          <Title size={TitleSize.BIG} value="Technical explanation"></Title>
          <p className="mt-10">
            {
              technicalDescription?.() ?? "There is no technical description available :("
            }
          </p>
        </section>
      }
      {
        history && history.length > 0 &&
        <section className="mt-10 rounded-md bg-gray-200">
          <div className="flex flex-row justify-between rounded-md bg-gray-300 p-2">
            <Title size={TitleSize.BIG} value="History" />
            <div
              className="cursor-pointer transition-all hover:bg-gray-600 rounded-full pb-2 px-3"
              onClick={() => setShowHistory(!showHistory)}
            >
              <FontAwesomeIcon
                icon={faSortDown}
                fontSize={32}
              />
            </div>
          </div>
          <ul className={`text-sm px-6 py-2 transition-all ${showHistory? '': 'hidden'}`}>
            {
              history.map((history: React.JSX.Element, index: number) =>
                <li className="list-disc" key={index}>{history}</li>
              )
            }
          </ul>
        </section>
      }
      <section className="mt-10 text-center">
        <Button
          onClick={() => window.open(link, '_blank')}
          value="Visit"
          className="w-9/12 h-20"
        ></Button>
      </section>
    </article>
  )
}