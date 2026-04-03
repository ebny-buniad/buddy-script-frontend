import React from 'react'

export default function CommonLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <div>
                {children}
            </div>
        </div>
    )
}
