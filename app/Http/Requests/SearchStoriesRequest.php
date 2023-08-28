<?php

namespace App\Http\Requests;

use App\Http\Resources\StoryCollection;
use App\Models\Story;
use Illuminate\Foundation\Http\FormRequest;

class SearchStoriesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'search' => 'nullable|string',
            'page' => 'numeric',
            'limit' => 'numeric'
        ];
    }

    public function searchStories($own = false)
    {
        $queryResults = $own
            ? Story::ownSearch($this)
            : Story::allSearch($this);
        return new StoryCollection($queryResults);
    }
}
