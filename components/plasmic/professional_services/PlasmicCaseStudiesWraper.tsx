// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9BzSYZY1UKe9wRcv3hPs4L
// Component: izD__6mnLwkIKc
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: XcSNCNX4wrmaW/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_professional_services.module.css"; // plasmic-import: 9BzSYZY1UKe9wRcv3hPs4L/projectcss
import sty from "./PlasmicCaseStudiesWraper.module.css"; // plasmic-import: izD__6mnLwkIKc/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: xUJrFddW_IqdU/icon

export type PlasmicCaseStudiesWraper__VariantMembers = {};

export type PlasmicCaseStudiesWraper__VariantsArgs = {};
type VariantPropType = keyof PlasmicCaseStudiesWraper__VariantsArgs;
export const PlasmicCaseStudiesWraper__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCaseStudiesWraper__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicCaseStudiesWraper__ArgsType;
export const PlasmicCaseStudiesWraper__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicCaseStudiesWraper__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
  freeBox?: p.Flex<"div">;
};

export interface DefaultCaseStudiesWraperProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

export const defaultCaseStudiesWraper__Args: Partial<PlasmicCaseStudiesWraper__ArgsType> =
  {};

function PlasmicCaseStudiesWraper__RenderFunc(props: {
  variants: PlasmicCaseStudiesWraper__VariantsArgs;
  args: PlasmicCaseStudiesWraper__ArgsType;
  overrides: PlasmicCaseStudiesWraper__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultCaseStudiesWraper__Args, props.args);
  const $props = args;

  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      component={Link}
      href={"/story" as const}
      platform={"nextjs"}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__aKvys)}
            displayHeight={"auto" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"100%" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"auto" as const}
            loading={"lazy" as const}
            src={{
              src: "/plasmic/professional_services/images/people31046351920Jpg.jpeg",
              fullWidth: 1920,
              fullHeight: 1281,
              aspectRatio: undefined
            }}
          />
        ),

        value: args.children
      })}

      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__kLkoe
                )}
              >
                {"Case Studies Lorem Heading "}
              </h3>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wFeEf
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...."
                }
              </div>

              <Button
                className={classNames("__wab_instance", sty.button___44Pb4)}
                color={"blackCoffee" as const}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__dVzwP
                  )}
                >
                  {"Read More"}
                </div>
              </Button>
            </React.Fragment>
          ),
          value: args.slot
        })}
      </p.Stack>
    </p.PlasmicLink>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCaseStudiesWraper__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCaseStudiesWraper__VariantsArgs;
    args?: PlasmicCaseStudiesWraper__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCaseStudiesWraper__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCaseStudiesWraper__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCaseStudiesWraper__ArgProps,
      internalVariantPropNames: PlasmicCaseStudiesWraper__VariantProps
    });

    return PlasmicCaseStudiesWraper__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCaseStudiesWraper";
  } else {
    func.displayName = `PlasmicCaseStudiesWraper.${nodeName}`;
  }
  return func;
}

export const PlasmicCaseStudiesWraper = Object.assign(
  // Top-level PlasmicCaseStudiesWraper renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicCaseStudiesWraper
    internalVariantProps: PlasmicCaseStudiesWraper__VariantProps,
    internalArgProps: PlasmicCaseStudiesWraper__ArgProps
  }
);

export default PlasmicCaseStudiesWraper;
/* prettier-ignore-end */
