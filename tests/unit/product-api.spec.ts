import { describe, it, expect, vi } from "vitest";
import v86Products from "../mock-data/v86/product";
import { getProducts } from "../../src/api";

const mockFetch = vi.fn();
global.fetch = mockFetch;

describe("Product API", () => {
  it("should return products when the API call is successful", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => v86Products,
    });

    const result = await getProducts("V86");

    expect(result).toEqual(v86Products);

    expect(fetch).toHaveBeenCalledWith(
      "https://www.atg.se/services/racinginfo/v1/api/products/V86"
    );
  });

  it("should throw an error if the API response is not ok", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    await expect(getProducts("V75")).rejects.toThrow("HTTP error! Status: 500");
  });

  it("should log a validation error if the response doesn't match the schema", async () => {
    const consoleWarnSpy = vi.spyOn(console, "warn");

    // Mock fetch response with invalid data
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => {},
    });

    await getProducts("V75");

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "getProducts - Validation Error",
      expect.anything()
    );
  });
});
