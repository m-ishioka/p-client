// Code generated by entproto. DO NOT EDIT.

// @generated by protoc-gen-connect-web v0.6.0 with parameter "target=ts,import_extension=none"
// @generated from file entpb.proto (package entpb, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { BatchCreateProcessTypesRequest, BatchCreateProcessTypesResponse, BatchCreateProjectsRequest, BatchCreateProjectsResponse, BatchCreateSkillsRequest, BatchCreateSkillsResponse, BatchCreateSkillTypesRequest, BatchCreateSkillTypesResponse, CreateProcessTypeRequest, CreateProjectRequest, CreateSkillRequest, CreateSkillTypeRequest, DeleteProcessTypeRequest, DeleteProjectRequest, DeleteSkillRequest, DeleteSkillTypeRequest, GetProcessTypeRequest, GetProjectRequest, GetSkillRequest, GetSkillTypeRequest, ListProcessTypeRequest, ListProcessTypeResponse, ListProjectRequest, ListProjectResponse, ListSkillRequest, ListSkillResponse, ListSkillTypeRequest, ListSkillTypeResponse, ProcessType, Project, Skill, SkillType, UpdateProcessTypeRequest, UpdateProjectRequest, UpdateSkillRequest, UpdateSkillTypeRequest } from "./entpb_pb";
import { Empty, MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service entpb.ProcessTypeService
 */
export const ProcessTypeService = {
  typeName: "entpb.ProcessTypeService",
  methods: {
    /**
     * @generated from rpc entpb.ProcessTypeService.Create
     */
    create: {
      name: "Create",
      I: CreateProcessTypeRequest,
      O: ProcessType,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc entpb.ProcessTypeService.Get
     */
    get: {
      name: "Get",
      I: GetProcessTypeRequest,
      O: ProcessType,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc entpb.ProcessTypeService.Update
     */
    update: {
      name: "Update",
      I: UpdateProcessTypeRequest,
      O: ProcessType,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc entpb.ProcessTypeService.Delete
     */
    delete: {
      name: "Delete",
      I: DeleteProcessTypeRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc entpb.ProcessTypeService.List
     */
    list: {
      name: "List",
      I: ListProcessTypeRequest,
      O: ListProcessTypeResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc entpb.ProcessTypeService.BatchCreate
     */
    batchCreate: {
      name: "BatchCreate",
      I: BatchCreateProcessTypesRequest,
      O: BatchCreateProcessTypesResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

/**
 * @generated from service entpb.ProjectService
 */
export const ProjectService = {
  typeName: "entpb.ProjectService",
  methods: {
    /**
     * @generated from rpc entpb.ProjectService.Create
     */
    create: {
      name: "Create",
      I: CreateProjectRequest,
      O: Project,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc entpb.ProjectService.Get
     */
    get: {
      name: "Get",
      I: GetProjectRequest,
      O: Project,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc entpb.ProjectService.Update
     */
    update: {
      name: "Update",
      I: UpdateProjectRequest,
      O: Project,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc entpb.ProjectService.Delete
     */
    delete: {
      name: "Delete",
      I: DeleteProjectRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc entpb.ProjectService.List
     */
    list: {
      name: "List",
      I: ListProjectRequest,
      O: ListProjectResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc entpb.ProjectService.BatchCreate
     */
    batchCreate: {
      name: "BatchCreate",
      I: BatchCreateProjectsRequest,
      O: BatchCreateProjectsResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

/**
 * @generated from service entpb.SkillService
 */
export const SkillService = {
  typeName: "entpb.SkillService",
  methods: {
    /**
     * @generated from rpc entpb.SkillService.Create
     */
    create: {
      name: "Create",
      I: CreateSkillRequest,
      O: Skill,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc entpb.SkillService.Get
     */
    get: {
      name: "Get",
      I: GetSkillRequest,
      O: Skill,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc entpb.SkillService.Update
     */
    update: {
      name: "Update",
      I: UpdateSkillRequest,
      O: Skill,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc entpb.SkillService.Delete
     */
    delete: {
      name: "Delete",
      I: DeleteSkillRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc entpb.SkillService.List
     */
    list: {
      name: "List",
      I: ListSkillRequest,
      O: ListSkillResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc entpb.SkillService.BatchCreate
     */
    batchCreate: {
      name: "BatchCreate",
      I: BatchCreateSkillsRequest,
      O: BatchCreateSkillsResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

/**
 * @generated from service entpb.SkillTypeService
 */
export const SkillTypeService = {
  typeName: "entpb.SkillTypeService",
  methods: {
    /**
     * @generated from rpc entpb.SkillTypeService.Create
     */
    create: {
      name: "Create",
      I: CreateSkillTypeRequest,
      O: SkillType,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc entpb.SkillTypeService.Get
     */
    get: {
      name: "Get",
      I: GetSkillTypeRequest,
      O: SkillType,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc entpb.SkillTypeService.Update
     */
    update: {
      name: "Update",
      I: UpdateSkillTypeRequest,
      O: SkillType,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc entpb.SkillTypeService.Delete
     */
    delete: {
      name: "Delete",
      I: DeleteSkillTypeRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc entpb.SkillTypeService.List
     */
    list: {
      name: "List",
      I: ListSkillTypeRequest,
      O: ListSkillTypeResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc entpb.SkillTypeService.BatchCreate
     */
    batchCreate: {
      name: "BatchCreate",
      I: BatchCreateSkillTypesRequest,
      O: BatchCreateSkillTypesResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

