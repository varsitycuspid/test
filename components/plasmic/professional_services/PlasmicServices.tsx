// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9BzSYZY1UKe9wRcv3hPs4L
// Component: 61JjuEGdFJ8o-0
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
import Header from "../../Header"; // plasmic-import: I_MYqYFFXiVox/component
import ServicesWhite from "../../ServicesWhite"; // plasmic-import: oQSpPRyCCMZR8S/component
import Footer from "../../Footer"; // plasmic-import: 4zVNimxrflLuq/component

import { useScreenVariants as useScreenVariantsx3WpyNuTSdyZz6 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: X3WpyNuTSdyZZ6/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_professional_services.module.css"; // plasmic-import: 9BzSYZY1UKe9wRcv3hPs4L/projectcss
import sty from "./PlasmicServices.module.css"; // plasmic-import: 61JjuEGdFJ8o-0/css

import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: vbQVvDQQi04RB/icon

export type PlasmicServices__VariantMembers = {};

export type PlasmicServices__VariantsArgs = {};
type VariantPropType = keyof PlasmicServices__VariantsArgs;
export const PlasmicServices__VariantProps = new Array<VariantPropType>();

export type PlasmicServices__ArgsType = {};
type ArgPropType = keyof PlasmicServices__ArgsType;
export const PlasmicServices__ArgProps = new Array<ArgPropType>();

export type PlasmicServices__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  pageBanerSection?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  img?: p.Flex<typeof p.PlasmicImg>;
  text?: p.Flex<"div">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultServicesProps {}

export const defaultServices__Args: Partial<PlasmicServices__ArgsType> = {};

function PlasmicServices__RenderFunc(props: {
  variants: PlasmicServices__VariantsArgs;
  args: PlasmicServices__ArgsType;
  overrides: PlasmicServices__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultServices__Args, props.args);
  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsx3WpyNuTSdyZz6()
  });

  return (
    <React.Fragment>
      {}

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div
            data-plasmic-name={"pageBanerSection"}
            data-plasmic-override={overrides.pageBanerSection}
            className={classNames(projectcss.all, sty.pageBanerSection)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__zPxT)}>
              <h1
                data-plasmic-name={"h1"}
                data-plasmic-override={overrides.h1}
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1
                )}
              >
                {"Services"}
              </h1>
            </div>
          </div>

          <section className={classNames(projectcss.all, sty.section__uNLm6)}>
            <div className={classNames(projectcss.all, sty.freeBox___1IsAu)}>
              <div className={classNames(projectcss.all, sty.freeBox___9Gko3)}>
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__yuPtr)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.columns__mC9Wf)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__gRi68
                        )}
                      >
                        <ServicesWhite
                          className={classNames(
                            "__wab_instance",
                            sty.servicesWhite__wCkrE
                          )}
                          slot={
                            <h3
                              className={classNames(
                                projectcss.all,
                                projectcss.h3,
                                projectcss.__wab_text,
                                sty.h3__ujV0X
                              )}
                            >
                              {"Services main"}
                            </h3>
                          }
                        />
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__tfnWd
                        )}
                      >
                        <ServicesWhite
                          className={classNames(
                            "__wab_instance",
                            sty.servicesWhite__wJh9L
                          )}
                          slot={
                            <h3
                              className={classNames(
                                projectcss.all,
                                projectcss.h3,
                                projectcss.__wab_text,
                                sty.h3__siO9D
                              )}
                            >
                              {"Services main"}
                            </h3>
                          }
                        />
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__yMzDq
                        )}
                      >
                        <ServicesWhite
                          className={classNames(
                            "__wab_instance",
                            sty.servicesWhite__xeUgO
                          )}
                          slot={
                            <h3
                              className={classNames(
                                projectcss.all,
                                projectcss.h3,
                                projectcss.__wab_text,
                                sty.h3__ghH8F
                              )}
                            >
                              {"Services main"}
                            </h3>
                          }
                        />
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column___5Xsie
                        )}
                      >
                        <ServicesWhite
                          className={classNames(
                            "__wab_instance",
                            sty.servicesWhite__ezEnf
                          )}
                          slot={
                            <h3
                              className={classNames(
                                projectcss.all,
                                projectcss.h3,
                                projectcss.__wab_text,
                                sty.h3__viPja
                              )}
                            >
                              {"Services main"}
                            </h3>
                          }
                        />
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__pcNyz
                        )}
                      >
                        <ServicesWhite
                          className={classNames(
                            "__wab_instance",
                            sty.servicesWhite__k5G6U
                          )}
                          slot={
                            <h3
                              className={classNames(
                                projectcss.all,
                                projectcss.h3,
                                projectcss.__wab_text,
                                sty.h3__e49Uc
                              )}
                            >
                              {"Services main"}
                            </h3>
                          }
                        />
                      </div>

                      <div
                        className={classNames(projectcss.all, sty.column__h3Sg)}
                      >
                        <ServicesWhite
                          className={classNames(
                            "__wab_instance",
                            sty.servicesWhite___6Srjk
                          )}
                          slot={
                            <h3
                              className={classNames(
                                projectcss.all,
                                projectcss.h3,
                                projectcss.__wab_text,
                                sty.h3__dsHjo
                              )}
                            >
                              {"Services main"}
                            </h3>
                          }
                        />
                      </div>
                    </p.Stack>
                  </p.Stack>
                ) : null}
              </div>
            </div>
          </section>

          <section className={classNames(projectcss.all, sty.section__qBpnf)}>
            <h2
              className={classNames(
                projectcss.all,
                projectcss.h2,
                projectcss.__wab_text,
                sty.h2___6Br6A
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly")
                ? "Why Choose Us"
                : "Our process"}
            </h2>

            <div className={classNames(projectcss.all, sty.freeBox___1Rapm)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns___4USWc)}
              >
                <div className={classNames(projectcss.all, sty.column__vhxI5)}>
                  <ServicesWhite
                    className={classNames(
                      "__wab_instance",
                      sty.servicesWhite__slv2M
                    )}
                    slot={
                      <h3
                        className={classNames(
                          projectcss.all,
                          projectcss.h3,
                          projectcss.__wab_text,
                          sty.h3__pK3YN
                        )}
                      >
                        {"Services main"}
                      </h3>
                    }
                  />
                </div>

                <div className={classNames(projectcss.all, sty.column__q1Ua1)}>
                  <ServicesWhite
                    className={classNames(
                      "__wab_instance",
                      sty.servicesWhite__xz4YL
                    )}
                    slot={
                      <h3
                        className={classNames(
                          projectcss.all,
                          projectcss.h3,
                          projectcss.__wab_text,
                          sty.h3__gdQa
                        )}
                      >
                        {"Services main"}
                      </h3>
                    }
                  />
                </div>

                <div className={classNames(projectcss.all, sty.column__mrh4N)}>
                  <ServicesWhite
                    className={classNames(
                      "__wab_instance",
                      sty.servicesWhite__uPwd
                    )}
                    slot={
                      <h3
                        className={classNames(
                          projectcss.all,
                          projectcss.h3,
                          projectcss.__wab_text,
                          sty.h3___8986G
                        )}
                      >
                        {"Services main"}
                      </h3>
                    }
                  />
                </div>

                <div className={classNames(projectcss.all, sty.column__qCliq)}>
                  <ServicesWhite
                    className={classNames(
                      "__wab_instance",
                      sty.servicesWhite__qNs4P
                    )}
                    slot={
                      <h3
                        className={classNames(
                          projectcss.all,
                          projectcss.h3,
                          projectcss.__wab_text,
                          sty.h3__qnONl
                        )}
                      >
                        {"Services main"}
                      </h3>
                    }
                  />
                </div>

                <div className={classNames(projectcss.all, sty.column__dIbct)}>
                  <ServicesWhite
                    className={classNames(
                      "__wab_instance",
                      sty.servicesWhite__tY4X
                    )}
                    slot={
                      <h3
                        className={classNames(
                          projectcss.all,
                          projectcss.h3,
                          projectcss.__wab_text,
                          sty.h3__x4Zeu
                        )}
                      >
                        {"Services main"}
                      </h3>
                    }
                  />
                </div>

                <div className={classNames(projectcss.all, sty.column__mFxss)}>
                  <ServicesWhite
                    className={classNames(
                      "__wab_instance",
                      sty.servicesWhite__hL1R
                    )}
                    slot={
                      <h3
                        className={classNames(
                          projectcss.all,
                          projectcss.h3,
                          projectcss.__wab_text,
                          sty.h3__u9PIt
                        )}
                      >
                        {"Services main"}
                      </h3>
                    }
                  />
                </div>
              </p.Stack>
            </div>
          </section>

          <section className={classNames(projectcss.all, sty.section__zpN6)}>
            <div className={classNames(projectcss.all, sty.freeBox__pNjZy)}>
              <div className={classNames(projectcss.all, sty.freeBox__bfkZz)}>
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__oP88)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.columns__p4Mg)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__z8FyU
                        )}
                      >
                        <ServicesWhite
                          className={classNames(
                            "__wab_instance",
                            sty.servicesWhite__qKb3I
                          )}
                          slot={
                            <h3
                              className={classNames(
                                projectcss.all,
                                projectcss.h3,
                                projectcss.__wab_text,
                                sty.h3__d0Xl
                              )}
                            >
                              {"Services main"}
                            </h3>
                          }
                        />
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column___7RKy
                        )}
                      >
                        <ServicesWhite
                          className={classNames(
                            "__wab_instance",
                            sty.servicesWhite__j7Ez8
                          )}
                          slot={
                            <h3
                              className={classNames(
                                projectcss.all,
                                projectcss.h3,
                                projectcss.__wab_text,
                                sty.h3__zBInb
                              )}
                            >
                              {"Services main"}
                            </h3>
                          }
                        />
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column___4FhJn
                        )}
                      >
                        <ServicesWhite
                          className={classNames(
                            "__wab_instance",
                            sty.servicesWhite__zxJn4
                          )}
                          slot={
                            <h3
                              className={classNames(
                                projectcss.all,
                                projectcss.h3,
                                projectcss.__wab_text,
                                sty.h3__uMfaR
                              )}
                            >
                              {"Services main"}
                            </h3>
                          }
                        />
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__yLfBb
                        )}
                      >
                        <ServicesWhite
                          className={classNames(
                            "__wab_instance",
                            sty.servicesWhite__eWhdA
                          )}
                          slot={
                            <h3
                              className={classNames(
                                projectcss.all,
                                projectcss.h3,
                                projectcss.__wab_text,
                                sty.h3__bmM4
                              )}
                            >
                              {"Services main"}
                            </h3>
                          }
                        />
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__pllg3
                        )}
                      >
                        <ServicesWhite
                          className={classNames(
                            "__wab_instance",
                            sty.servicesWhite__orYX
                          )}
                          slot={
                            <h3
                              className={classNames(
                                projectcss.all,
                                projectcss.h3,
                                projectcss.__wab_text,
                                sty.h3__ro9Yw
                              )}
                            >
                              {"Services main"}
                            </h3>
                          }
                        />
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column___2SDMf
                        )}
                      >
                        <ServicesWhite
                          className={classNames(
                            "__wab_instance",
                            sty.servicesWhite___54Oaq
                          )}
                          slot={
                            <h3
                              className={classNames(
                                projectcss.all,
                                projectcss.h3,
                                projectcss.__wab_text,
                                sty.h3__vKiR
                              )}
                            >
                              {"Services main"}
                            </h3>
                          }
                        />
                      </div>
                    </p.Stack>
                  </p.Stack>
                ) : null}
              </div>
            </div>
          </section>

          <section className={classNames(projectcss.all, sty.section__zScpt)}>
            <div className={classNames(projectcss.all, sty.freeBox__o0JuC)}>
              <div className={classNames(projectcss.all, sty.freeBox___2M2Vz)}>
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__b7PdA)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.columns__llb3U)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__cN6Wk
                        )}
                      >
                        <p.PlasmicImg
                          data-plasmic-name={"img"}
                          data-plasmic-override={overrides.img}
                          alt={""}
                          className={classNames(sty.img)}
                          displayHeight={"100%" as const}
                          displayMaxHeight={"none" as const}
                          displayMaxWidth={"100%" as const}
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={"100%" as const}
                          loading={"lazy" as const}
                          src={{
                            src: "/plasmic/professional_services/images/woman32879561920Jpg.jpeg",
                            fullWidth: 1920,
                            fullHeight: 1280,
                            aspectRatio: undefined
                          }}
                        />
                      </div>

                      <div
                        className={classNames(projectcss.all, sty.column__izg4)}
                      >
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__kIpf
                          )}
                        >
                          <h2
                            className={classNames(
                              projectcss.all,
                              projectcss.h2,
                              projectcss.__wab_text,
                              sty.h2__zA0Fw
                            )}
                          >
                            {"Why Choose Us"}
                          </h2>

                          <div
                            data-plasmic-name={"text"}
                            data-plasmic-override={overrides.text}
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text
                            )}
                          >
                            {
                              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                            }
                          </div>

                          <p.Stack
                            as={"div"}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.columns___0Bpej
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.column__ySLgy
                              )}
                            >
                              <ServicesWhite
                                className={classNames(
                                  "__wab_instance",
                                  sty.servicesWhite___5KLx7
                                )}
                                slot={
                                  <h3
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.h3,
                                      projectcss.__wab_text,
                                      sty.h3__vaMH
                                    )}
                                  >
                                    {"Services main"}
                                  </h3>
                                }
                              />
                            </div>

                            <div
                              className={classNames(
                                projectcss.all,
                                sty.column__lvb9
                              )}
                            >
                              <ServicesWhite
                                className={classNames(
                                  "__wab_instance",
                                  sty.servicesWhite__tsi0S
                                )}
                                slot={
                                  <h3
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.h3,
                                      projectcss.__wab_text,
                                      sty.h3__sv91T
                                    )}
                                  >
                                    {"Services main"}
                                  </h3>
                                }
                              />
                            </div>

                            <div
                              className={classNames(
                                projectcss.all,
                                sty.column___2HQmE
                              )}
                            >
                              <ServicesWhite
                                className={classNames(
                                  "__wab_instance",
                                  sty.servicesWhite__awVuu
                                )}
                                slot={
                                  <h3
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.h3,
                                      projectcss.__wab_text,
                                      sty.h3__osTuW
                                    )}
                                  >
                                    {"Services main"}
                                  </h3>
                                }
                              />
                            </div>

                            <div
                              className={classNames(
                                projectcss.all,
                                sty.column___2C9A
                              )}
                            >
                              <ServicesWhite
                                className={classNames(
                                  "__wab_instance",
                                  sty.servicesWhite__ig71N
                                )}
                                slot={
                                  <h3
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.h3,
                                      projectcss.__wab_text,
                                      sty.h3__yYGy
                                    )}
                                  >
                                    {"Services main"}
                                  </h3>
                                }
                              />
                            </div>
                          </p.Stack>
                        </p.Stack>
                      </div>
                    </p.Stack>
                  </p.Stack>
                ) : null}
              </div>
            </div>
          </section>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "pageBanerSection", "h1", "img", "text", "footer"],
  header: ["header"],
  pageBanerSection: ["pageBanerSection", "h1"],
  h1: ["h1"],
  img: ["img"],
  text: ["text"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  pageBanerSection: "div";
  h1: "h1";
  img: typeof p.PlasmicImg;
  text: "div";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicServices__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicServices__VariantsArgs;
    args?: PlasmicServices__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicServices__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicServices__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicServices__ArgProps,
      internalVariantPropNames: PlasmicServices__VariantProps
    });

    return PlasmicServices__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicServices";
  } else {
    func.displayName = `PlasmicServices.${nodeName}`;
  }
  return func;
}

export const PlasmicServices = Object.assign(
  // Top-level PlasmicServices renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    pageBanerSection: makeNodeComponent("pageBanerSection"),
    h1: makeNodeComponent("h1"),
    img: makeNodeComponent("img"),
    text: makeNodeComponent("text"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicServices
    internalVariantProps: PlasmicServices__VariantProps,
    internalArgProps: PlasmicServices__ArgProps
  }
);

export default PlasmicServices;
/* prettier-ignore-end */
