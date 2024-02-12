import { IEvent } from '@/lib/mongodb/database/models/eventModel';
import React, { FC } from 'react'

type CollectionTypes = {
    data: IEvent[];
    emptyTitle: string;
    emptyStateSubtext: string;
    limit: number;
    page: number | string;
    totalPages?: number;
    urlParamName?: string;
    collectionType?: 'Events_Organized' | 'My_Tickets' | 'All_Events'
}

const Collection:FC<CollectionTypes> = ({
    data,
    emptyTitle,
    emptyStateSubtext,
    page,
    totalPages=0,
    collectionType,
    urlParamName
}) => {
  return (
    <div>Collection</div>
  )
}

export default Collection