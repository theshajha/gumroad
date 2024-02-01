import React, { useState } from 'react'
import NavOptions, { NavOptionsType } from '../../../constants/NavOptions'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'

const SideNav = (props: {
    selectedOptionId: string
    setSelectedOptionId: CallableFunction
}) => {
    const { selectedOptionId, setSelectedOptionId } = props

    return (
        <div className="flex justify-between items-start self-stretch py-[1rem] p-0">
            <div className="flex flex-col items-start gap-4 self-stretch pt-3 pb-6 px-4 bg-[#242423] ">
                {NavOptions.map((option) => (
                    <RenderNavOption
                        option={option}
                        selectedOptionId={selectedOptionId}
                        setSelectedOptionId={setSelectedOptionId}
                    />
                ))}
            </div>
        </div>
    )
}

const RenderNavOption = (props: {
    option: NavOptionsType
    selectedOptionId: string
    setSelectedOptionId: CallableFunction
}) => {
    const { option, selectedOptionId, setSelectedOptionId } = props
    const { title, image, slug, id } = option
    const navigate = useNavigate()

    const handleClick = () => {
        setSelectedOptionId(id)
        navigate({ search: id !== '0' ? `category=${slug}` : '' })
    }
    return (
        <div
            className={clsx(
                selectedOptionId === id
                    ? 'rounded border border-black bg-black/[.40]'
                    : '',
                'flex items-center gap-3 self-stretch py-2 px-6 cursor-pointer hover:bg-black/[.20]'
            )}
            onClick={handleClick}
        >
            {image && <img src={image} alt="title" />}
            <div
                className={clsx(
                    selectedOptionId ? 'text-white font-medium' : '',
                    'text-[#ddd] font-[mabry Pro] text-left leading-[normal]'
                )}
            >
                {title}
            </div>
        </div>
    )
}

export default SideNav
