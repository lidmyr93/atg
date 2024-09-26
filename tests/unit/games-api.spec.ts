import { describe, it, expect, vi } from "vitest";
import v86Games from "../mock-data/v86/games";
import { getGames } from "../../src/api";

const mockFetch = vi.fn();
global.fetch = mockFetch;

describe("Games API", () => {
  it("should return game data when the API call is successful", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => v86Games,
    });

    const result = await getGames("123");

    expect(result).toEqual(v86Games);
    expect(fetch).toHaveBeenCalledWith(
      "https://www.atg.se/services/racinginfo/v1/api/games/123"
    );
  });

  it("should throw an error if the API response is not ok", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 403,
    });

    await expect(getGames("123")).rejects.toThrow("HTTP error! Status: 403");
  });

  it("should log a validation error if the response doesn't match the schema", async () => {
    const consoleWarnSpy = vi.spyOn(console, "warn");

    // Mock fetch response with invalid data
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => {},
    });

    await getGames("123");

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "getGames - Validation Error",
      expect.anything()
    );
  });
});
