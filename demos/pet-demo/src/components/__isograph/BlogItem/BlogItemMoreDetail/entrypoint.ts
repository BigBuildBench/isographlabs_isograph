import type {IsographEntrypoint, NormalizationAst, RefetchQueryNormalizationArtifactWrapper} from '@isograph/react';
import {BlogItem__BlogItemMoreDetail__param} from './param_type';
import {BlogItem__BlogItemMoreDetail__output_type} from './output_type';
import readerResolver from './resolver_reader';
const nestedRefetchQueries: RefetchQueryNormalizationArtifactWrapper[] = [];

const queryText = 'query BlogItemMoreDetail ($id: ID!) {\
  node____id___v_id: node(id: $id) {\
    ... on BlogItem {\
      __typename,\
      id,\
      moreContent,\
    },\
  },\
}';

const normalizationAst: NormalizationAst = [
  {
    kind: "Linked",
    fieldName: "node",
    arguments: [
      [
        "id",
        { kind: "Variable", name: "id" },
      ],
    ],
    selections: [
      {
        kind: "InlineFragment",
        type: "BlogItem",
        selections: [
          {
            kind: "Scalar",
            fieldName: "__typename",
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "id",
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "moreContent",
            arguments: null,
          },
        ],
      },
    ],
  },
];
const artifact: IsographEntrypoint<
  BlogItem__BlogItemMoreDetail__param,
  BlogItem__BlogItemMoreDetail__output_type
> = {
  kind: "Entrypoint",
  queryText,
  normalizationAst,
  readerWithRefetchQueries: {
    kind: "ReaderWithRefetchQueries",
    nestedRefetchQueries,
    readerArtifact: readerResolver,
  },
};

export default artifact;