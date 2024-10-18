"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedInScraperController = void 0;
const common_1 = require("@nestjs/common");
const linkedin_scraper_service_1 = require("./linkedin-scraper.service");
let LinkedInScraperController = class LinkedInScraperController {
    constructor(linkedInScraperService) {
        this.linkedInScraperService = linkedInScraperService;
    }
    async scrapeJobs(keywords, location = 'Australia') {
        return this.linkedInScraperService.scrapeJobs(keywords, location);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('keywords')),
    __param(1, (0, common_1.Query)('location')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], LinkedInScraperController.prototype, "scrapeJobs", null);
LinkedInScraperController = __decorate([
    (0, common_1.Controller)('scrape-jobs'),
    __metadata("design:paramtypes", [linkedin_scraper_service_1.LinkedInScraperService])
], LinkedInScraperController);
exports.LinkedInScraperController = LinkedInScraperController;
//# sourceMappingURL=linkedin-scraper.controller.js.map