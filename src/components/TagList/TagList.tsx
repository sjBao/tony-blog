import * as React from 'react';

import { TagLink } from './TagLink';

interface TagListProps {
  tags: string[];
}

export const TagList: React.FunctionComponent<TagListProps> = ({ tags }) => <>
  { tags?.map(tag => <TagLink key={tag} to={`/blog?${tag}`}>{tag}</TagLink>)}
</>;